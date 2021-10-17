import * as THREE from "three";
import * as CANNON from "cannon-es";
import gsap from "gsap";
import { autorun } from "mobx";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import Model from "./models/Model";
import SolarSystem from "./SolarSystem";
import Spaceship from "./models/Spaceship";

import Coin from "./obstacles/Coin";
import Meteor from "./obstacles/Meteor";
import ObstacleHolder from "./obstacles/ObstacleHolder";

import { STATE } from "../constants/view";
import viewStore from "../store/viewStore";
class World {
  constructor(canvas, loadingManager) {
    this.canvas = canvas;
    this.loadingManager = loadingManager;
    this.clock = new THREE.Clock();
    this.oldElapsedTime = 0;

    this.currentPosition = new THREE.Vector3();
    this.currentLookat = new THREE.Vector3();

    autorun(() => {
      if (viewStore.currentState === STATE.SET) {
        this.createCoin();
        this.createMeteor();

        this.control.reset();

        gsap.to(this.camera.position, {
          duration: 1,
          x: 0,
          y: 0,
          z: 500,
          onUpdate: () => {
            this.control.enabled = false;
            this.control.update();
          },
        });
      }

      if (viewStore.currentState === STATE.END) {
        this.camera.position.set(0, 0, 1500);

        this.control.enabled = true;
        this.control.update();

        this.scene.remove(this.coinHolder.mesh);
        this.scene.remove(this.meteorHolder.mesh);
      }
    });

    this.loadAllModel();
  }

  async loadAllModel() {
    const gltfLoader = new GLTFLoader(this.loadingManager);
    const cubeTextureLoader = new THREE.CubeTextureLoader(this.loadingManager);

    const [moon, earth, spaceship, backgroundTexture] = await Promise.all([
      gltfLoader.loadAsync("/models/moon/scene.gltf"),
      gltfLoader.loadAsync("/models/earth/scene.gltf"),
      gltfLoader.loadAsync("/models/spaceship/scene.gltf"),
      cubeTextureLoader.loadAsync([
        "/textures/spaceCubeMap/spaceX-.png",
        "/textures/spaceCubeMap/spaceX+.png",
        "/textures/spaceCubeMap/spaceY-.png",
        "/textures/spaceCubeMap/spaceY+.png",
        "/textures/spaceCubeMap/spaceZ-.png",
        "/textures/spaceCubeMap/spaceZ+.png",
      ]),
    ]);

    this.modelStorage = {};
    this.modelStorage.moon = moon.scene;
    this.modelStorage.earth = earth.scene;
    this.modelStorage.spaceship = spaceship.scene;

    this.textureStorage = {};
    this.textureStorage.background = backgroundTexture;

    this.initialize();
  }

  initialize() {
    this.scene = new THREE.Scene();

    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    this.addLight();
    this.addPhysicsWorld();
    this.addCamera(this.sizes);
    this.render(this.canvas, this.sizes);
    this.addControl(this.camera, this.canvas);

    this.scene.background = this.textureStorage.background;

    this.solarSystem = new SolarSystem(this.scene);
    this.moon = new Model(this.modelStorage.moon, this.scene);
    this.earth = new Model(this.modelStorage.earth, this.scene);
    this.spaceship = new Spaceship(this.modelStorage.spaceship, this.scene, this.physicsWorld);

    this.moon.setScale(50);
    this.moon.setPosition(600, 0, 0);
    this.moon.receiveShadow();
    this.solarSystem.add(this.moon.model);

    this.earth.setPosition(60, -520, -50);
    this.earth.receiveShadow();
    this.earth.addToScene();

    this.spaceship.setPosition(0, 0, 0);
    this.spaceship.setScale(8);
    this.spaceship.setRotation(0, -Math.PI * 0.5, 0);
    this.spaceship.createPhysicsBox(30, 130, 50);
    this.spaceship.castShadow();
    this.spaceship.addToScene();

    this.tick();

    window.addEventListener("resize", () => this.onWindowResize());
  }

  addCamera(sizes) {
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20000);
    camera.position.set(0, 0, 1500);

    this.scene.add(camera);
    this.camera = camera;
  }

  addControl(camera, canvas) {
    const control = new OrbitControls(camera, canvas);
    control.enableDamping = true;
    control.enablePan = false;
    control.maxDistance = 1500;

    this.control = control;
  }

  addLight() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(30, 100, 100);
    directionalLight.castShadow = true;

    directionalLight.shadow.mapSize.width = 512;
    directionalLight.shadow.mapSize.height = 512;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;

    this.scene.add(ambientLight, directionalLight);
  }

  addBackground(background) {
    this.scene.background = background;
  }

  render(canvas, sizes) {
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;

    this.renderer = renderer;
  }

  addAxesHelper(size) {
    const axesHelper = new THREE.AxesHelper(size);
    this.scene.add(axesHelper);
  }

  addPhysicsWorld() {
    const world = new CANNON.World();
    world.broadphase = new CANNON.SAPBroadphase(world);
    world.allowSleep = true;
    world.gravity.set(0, -20, 0);

    this.physicsWorld = world;
  }

  createCoin() {
    this.coinHolder = ObstacleHolder(3, Coin, this.spaceship.model);
    this.scene.add(this.coinHolder.mesh);
  }

  createMeteor() {
    this.meteorHolder = ObstacleHolder(5, Meteor, this.spaceship.model);
    this.scene.add(this.meteorHolder.mesh);
  }

  tick() {
    const elapsedTime = this.clock.getElapsedTime();
    const deltaTime = elapsedTime - this.oldElapsedTime;
    this.oldElapsedTime = elapsedTime;

    if (viewStore.currentState === STATE.LAUNCH) {
      this.physicsWorld.step(1 / 60, deltaTime, 3);
      this.spaceship.enableControl(this.sizes);
      this.spaceship.update();

      this.camera.position.y = this.spaceship.model.position.y + 170;

      this.meteorHolder.spawn();
      this.meteorHolder.update(this.spaceship.boxBody, deltaTime);

      this.coinHolder.spawn();
      this.coinHolder.update(this.spaceship.boxBody, deltaTime);
    } else {
      this.solarSystem.update(elapsedTime);
    }

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.tick.bind(this));
  }

  onWindowResize() {
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;

    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
  }
}

export default World;
