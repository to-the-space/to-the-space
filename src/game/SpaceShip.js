import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class Spaceship {
  constructor(app) {
    this.app = app;
    this.clock = new THREE.Clock();

    this.loadSpaceship();
  }

  async loadSpaceship() {
    const gltfLoader = new GLTFLoader(this.app.loadingManager);
    const gltf = await gltfLoader.loadAsync("/models/spaceship/scene.gltf");

    this.spaceship = gltf.scene;
    this.spaceship.position.y = -0.5;
    this.spaceship.scale.set(0.2, 0.2, 0.2);

    this.app.world.scene.add(this.spaceship);
  }

  launch() {
    const elapsedTime = this.clock.getElapsedTime();

    if (this.spaceship.position.y < 196) {
      this.spaceship.position.y += elapsedTime * 0.05;
      this.app.world.camera.position.y = this.spaceship.position.y;
      this.app.world.controls.target.y = this.spaceship.position.y;

      this.spaceship.position.x = Math.random() * Math.PI * 0.005;
      this.spaceship.rotation.x = Math.random() * Math.sin(1) * 0.0004;
      this.spaceship.rotation.z = Math.random() * Math.sin(1) * 0.0004;
      this.spaceship.position.z = Math.random() * Math.PI * 0.005;
    }

    this.launchRequestId = window.requestAnimationFrame(this.launch.bind(this));
  }
}

export { Spaceship };
