import * as THREE from "three";
import gsap from "gsap";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class Spaceship {
  constructor(app) {
    this.app = app;
    this.clock = new THREE.Clock();

    this.loadSpaceShip();
  }

  async loadSpaceShip() {
    const gltfLoader = new GLTFLoader(this.app.loadingManager);

    const spaceshipGltf = await gltfLoader.loadAsync(
      "/models/spaceship/scene.gltf",
    );
    spaceshipGltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
      }
    });
    this.spaceship = spaceshipGltf.scene;
    this.spaceship.position.set(0, -2.55, 0);

    const flameGltf = await gltfLoader.loadAsync("/models/flame/scene.gltf");
    flameGltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
      }
    });
    this.flame = flameGltf.scene;
    this.flame.scale.set(0.5, 0.1, 0.5);
    this.flame.position.set(0.5, -77, -0.2);

    const axesHelper = new THREE.AxesHelper(5);
    this.spaceship.add(axesHelper);

    this.app.world.scene.add(this.spaceship);
  }

  launch() {
    this.spaceship.add(this.flame);
    this.launchRequestId = window.requestAnimationFrame(this.launch.bind(this));

    const elapsedTime = this.clock.getElapsedTime();

    if (this.spaceship.position.y > -380) {
      this.spaceship.translateY(elapsedTime * 0.05);
    }

    if (this.spaceship.position.x < 1000) {
      this.spaceship.position.x += elapsedTime * 0.03;
    }

    if (this.spaceship.rotation.z > -Math.PI) {
      this.spaceship.rotation.z -= elapsedTime * 0.0001;
    }

    this.app.world.camera.position.y = this.spaceship.position.y;
    this.app.world.controls.target.y = this.spaceship.position.y;

    this.app.world.camera.position.x = this.spaceship.position.x;
    this.app.world.controls.target.x = this.spaceship.position.x;
  }
}

export { Spaceship };
