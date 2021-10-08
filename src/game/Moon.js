import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class Moon {
  constructor(app) {
    this.app = app;

    this.clock = new THREE.Clock();
    this.solarSystem = new THREE.Object3D();

    this.loadMoon();
  }

  async loadMoon() {
    const gltfLoader = new GLTFLoader(this.app.loadingManager);

    const gltf = await gltfLoader.loadAsync("/models/moon/scene.gltf");
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.receiveShadow = true;
      }
    });
    this.moon = gltf.scene;
    this.moon.scale.set(150, 150, 150);
    this.moon.position.set(3000, -400);

    this.solarSystem.add(this.moon);
    this.app.world.scene.add(this.solarSystem);

    requestAnimationFrame(this.revolution.bind(this));
  }

  revolution(time) {
    time *= 0.0001;

    this.solarSystem.rotation.y = time;
    this.moon.rotation.y = time;

    requestAnimationFrame(this.revolution.bind(this));
  }
}

export { Moon };
