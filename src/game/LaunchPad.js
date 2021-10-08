import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class LaunchPad {
  constructor(app) {
    this.app = app;

    this.loadLaunchPad();
  }

  async loadLaunchPad() {
    const gltfLoader = new GLTFLoader(this.app.loadingManager);

    const gltf = await gltfLoader.loadAsync("/models/launchPad/scene.gltf");
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.cast = true;
      }
    });
    this.launchPad = gltf.scene;
    this.launchPad.scale.set(3, 3, 3);
    this.launchPad.position.set(0, -10, 0);

    this.app.world.scene.add(this.launchPad);
  }
}

export { LaunchPad };
