import * as THREE from "three";

class SkyBox {
  constructor(app) {
    this.app = app;

    this.loadSkyBox();
  }

  async loadSkyBox() {
    const cubeTextureLoader = new THREE.CubeTextureLoader(
      this.app.loadingManager,
    );

    this.cube = await cubeTextureLoader.loadAsync([
      "/textures/spaceCubeMap/spaceX-.png",
      "/textures/spaceCubeMap/spaceX+.png",
      "/textures/spaceCubeMap/spaceY-.png",
      "/textures/spaceCubeMap/spaceY+.png",
      "/textures/spaceCubeMap/spaceZ-.png",
      "/textures/spaceCubeMap/spaceZ+.png",
    ]);

    this.app.world.scene.background = this.cube;
  }
}

export { SkyBox };
