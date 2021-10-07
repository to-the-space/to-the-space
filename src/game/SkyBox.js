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
      "/skybox/SkyboxX+.png",
      "/skybox/SkyboxX-.png",
      "/skybox/SkyboxY+.png",
      "/skybox/SkyboxY-.png",
      "/skybox/SkyboxZ+.png",
      "/skybox/SkyboxZ-.png",
    ]);

    this.app.world.scene.background = this.cube;
  }
}

export { SkyBox };
