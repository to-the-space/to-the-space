import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class LaunchPad {
  constructor(app) {
    this.app = app;

    this.loadLaunchPad();
  }

  async loadLaunchPad() {
    const gltfLoader = new GLTFLoader(this.app.loadingManager);
    const gltf = await gltfLoader.loadAsync("/models/launchPad/scene.gltf");

    this.launchPad = gltf.scene;
    this.launchPad.castShadow = true;
    this.launchPad.scale.set(3, 3, 3);

    this.launchPad.updateMatrix();
    this.app.world.scene.add(this.launchPad);
  }

  explode() {}
}

export { LaunchPad };
