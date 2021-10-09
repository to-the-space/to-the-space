import * as THREE from "three";

class Model {
  constructor(model, scene) {
    this.model = model;
    this.scene = scene;

    this.defaultMaterial = new CANNON.Material("default");
  }

  setScale(size) {
    this.model.scale.set(size, size, size);
  }

  setPosition(x, y, z) {
    this.model.position.set(x, y, z);
  }

  setRotation(x, y, z) {
    this.model.rotation.set(x, y, z);
  }

  castShadow() {
    this.model.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
      }
    });
  }

  receiveShadow() {
    this.model.traverse((node) => {
      if (node.isMesh) {
        node.receiveShadow = true;
      }
    });
  }

  addToScene() {
    this.scene.add(this.model);
  }

  removeFromScene() {
    this.scene.remove(this.model);
  }

  addAxesHelper(axeLength) {
    const axesHelper = new THREE.AxesHelper(axeLength);
    this.model.add(axesHelper);
  }
}

export default Model;
