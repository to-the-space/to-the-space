import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class Earth {
  constructor(app) {
    this.app = app;

    this.loadEarth();
  }

  async loadEarth() {
    const gltfLoader = new GLTFLoader(this.app.loadingManager);
    const gltf = await gltfLoader.loadAsync("/models/earth/scene.gltf");

    this.earth = gltf.scene;
    this.receiveShadow = true;
    this.castShadow = false;
    this.earth.rotation.x = Math.PI * 1.5;

    this.app.world.scene.add(this.earth);
  }
}

export { Earth };
