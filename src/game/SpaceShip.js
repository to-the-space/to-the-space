import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class SpaceShip {
  constructor(app) {
    this.app = app;

    this.spaceShip;

    this.loadSpaceShip();
  }

  loadSpaceShip() {
    const gltfLoader = new GLTFLoader(this.app.loadingManager);

    gltfLoader.load("/models/spaceship/spaceShip.gltf", (gltf) => {
      this.spaceShip = gltf.scene;
      this.spaceShip.position.y = -0.5;
      this.spaceShip.scale.set(0.2, 0.2, 0.2);

      this.app.world.scene.add(this.spaceShip);
    });
  }

  launch(time) {}

  explode() {}
}

export { SpaceShip };
