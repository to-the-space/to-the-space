import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class SpaceShip {
  constructor(app) {
    this.app = app;
    this.clock = new THREE.Clock();

    this.loadSpaceShip();
  }

  async loadSpaceShip() {
    const gltfLoader = new GLTFLoader(this.app.loadingManager);
    const gltf = await gltfLoader.loadAsync("/models/spaceship/scene.gltf");

    this.spaceShip = gltf.scene;
    this.spaceShip.position.y = -0.5;
    this.spaceShip.scale.set(0.2, 0.2, 0.2);

    this.app.world.scene.add(this.spaceShip);
  }

  launch() {
    const elapsedTime = this.clock.getElapsedTime();

    this.spaceShip.position.y += elapsedTime * 0.05;
    this.app.world.camera.position.y = this.spaceShip.position.y;
    this.app.world.controls.target.y = this.spaceShip.position.y;

    if (this.spaceShip.position.y < 10) {
      this.spaceShip.position.x = Math.random() * Math.PI * 0.005;
      this.spaceShip.rotation.x = Math.random() * Math.sin(1) * 0.0004;
      this.spaceShip.rotation.z = Math.random() * Math.sin(1) * 0.0004;
      this.spaceShip.position.z = Math.random() * Math.PI * 0.005;
    } else {
      this.spaceShip.rotation.y += Math.sin(1) * 0.02;
    }

    this.launchRequestId = window.requestAnimationFrame(this.launch.bind(this));
  }

  explode() {}
}

export { SpaceShip };
