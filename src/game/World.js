import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import Model from "./Model";

class World {
  constructor(canvas, loadingManager) {
    this.canvas = canvas;
    this.loadingManager = loadingManager;

    this.initialize();
  }

  async initialize() {
    const gltfLoader = new GLTFLoader(this.loadingManager);
    const cubeTextureLoader = new THREE.CubeTextureLoader(this.loadingManager);

    const [moon, earth, launchPad, spaceship, spaceStation] = await Promise.all(
      [
        gltfLoader.loadAsync("/models/moon/scene.gltf"),
        gltfLoader.loadAsync("/models/earth/scene.gltf"),
        gltfLoader.loadAsync("/models/launchPad/scene.gltf"),
        gltfLoader.loadAsync("/models/spaceship/scene.gltf"),
        gltfLoader.loadAsync("/models/spaceStation/scene.gltf"),
      ],
    );

    const backgroundTexture = await cubeTextureLoader.loadAsync([
      "/textures/spaceCubeMap/spaceX-.png",
      "/textures/spaceCubeMap/spaceX+.png",
      "/textures/spaceCubeMap/spaceY-.png",
      "/textures/spaceCubeMap/spaceY+.png",
      "/textures/spaceCubeMap/spaceZ-.png",
      "/textures/spaceCubeMap/spaceZ+.png",
    ]);

    const modelStorage = {};
    modelStorage.moon = moon.scene;
    modelStorage.earth = earth.scene;
    modelStorage.launchPad = launchPad.scene;
    modelStorage.spaceship = spaceship.scene;
    modelStorage.spaceStation = spaceStation.scene;

    const textureStorage = {};
    textureStorage.backgroundTexture = backgroundTexture;

    this.start(modelStorage, textureStorage);
  }

  start(modelStorage, textureStorage) {
    this.scene = new THREE.Scene();

    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.clock = new THREE.Clock();

    this.addLight();
    this.addPhysicsWorld();
    this.addCamera(this.sizes);
    this.render(this.canvas, this.sizes);
    this.addControl(this.camera, this.canvas);

    this.scene.background = textureStorage.backgroundTexture;

    this.moon = new Model(modelStorage.moon, this.scene);
    this.earth = new Model(modelStorage.earth, this.scene);
    this.launchPad = new Model(modelStorage.launchPad, this.scene);
    this.spaceship = new Model(modelStorage.spaceship, this.scene);
    this.spaceStation = new Model(modelStorage.spaceStation, this.scene);

    this.moon.setScale(150);
    this.moon.setPosition(0, -400, -3000);
    this.moon.receiveShadow();
    this.moon.addToScene();

    this.earth.setPosition(60, -445, -50);
    this.earth.receiveShadow();
    this.earth.addToScene();

    this.launchPad.setScale(9);
    this.launchPad.setPosition(0, -14, 0);
    this.launchPad.castShadow();
    this.launchPad.addToScene();

    this.spaceship.castShadow();
    this.spaceship.setRotation(-Math.PI * 0.25, -Math.PI * 0.5, 0);
    this.spaceship.addToScene();

    this.spaceStation.setScale(3);
    this.spaceStation.setPosition(0, 0, -1000);
    this.spaceStation.receiveShadow();
    this.spaceStation.addToScene();

    this.tick();

    this.addAxesHelper(5);

    window.addEventListener("resize", () => this.onWindowResize());
  }

  addCamera(sizes) {
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      250000000,
    );

    camera.position.set(0, 0, 30);
    this.scene.add(camera);

    this.camera = camera;
  }

  addControl(camera, canvas) {
    const control = new OrbitControls(camera, canvas);
    control.enableDamping = true;
    control.enablePan = false;
    // control.enableZoom = false;

    this.control = control;
  }

  addLight() {
    const ambientLight = new THREE.AmbientLight(0xffffff);

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

  tick() {
    this.renderer.render(this.scene, this.camera);

    window.requestAnimationFrame(this.tick.bind(this));
  }

  async loadAllModel() {}

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
