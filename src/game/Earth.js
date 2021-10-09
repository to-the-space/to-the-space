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
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.receiveShadow = true;
      }
    });
    this.earth = gltf.scene;
    this.earth.rotation.set(Math.PI * 1.5, 0, Math.PI * 1.5);
    this.earth.position.set(0, -10, 0);

    const axesHelper = new THREE.AxesHelper(1000);
    this.earth.add(axesHelper);

    this.app.world.scene.add(this.earth);
  }
}

export { Earth };
