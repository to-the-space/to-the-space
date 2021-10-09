import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class SpaceStation {
  constructor(app) {
    this.app = app;

    this.SpaceStation = null;

    this.loadSpaceStation();
  }

  async loadSpaceStation() {
    const gltfLoader = new GLTFLoader(this.app.loadingManager);

    const gltf = await gltfLoader.loadAsync("/models/spaceStation/scene.gltf");
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.receiveShadow = true;
      }
    });
    this.spaceStation = gltf.scene;
    this.spaceStation.position.set(1000, -400, 0);
    this.spaceStation.scale.set(3, 3, 3);

    this.app.world.scene.add(this.spaceStation);
  }
}

export { SpaceStation };
