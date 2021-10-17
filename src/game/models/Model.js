import * as THREE from "three";
import * as CANNON from "cannon-es";

class Model {
  constructor(model, scene, physicsWorld) {
    this.model = model;
    this.scene = scene;
    this.physicsWorld = physicsWorld;

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

  createPhysicsBox(width, height, depth) {
    const boxShape = new CANNON.Box(new CANNON.Vec3(width, height, depth));

    this.boxBody = new CANNON.Body({
      mass: 1,
      position: new CANNON.Vec3(0, 0, 0),
      shape: boxShape,
      material: this.defaultMaterial,
    });

    this.boxBody.position.copy(this.model.position);
    this.boxBody.quaternion.copy(this.model.quaternion);
    this.physicsWorld.addBody(this.boxBody);
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
