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

    this.spaceStation = gltf.scene;
    this.spaceStation.position.set(1000, -400, 0);
    this.spaceStation.scale.set(4, 4, 4);
    this.spaceStation.receiveShadow = true;

    this.app.world.scene.add(this.spaceStation);
  }
}

export { SpaceStation };
