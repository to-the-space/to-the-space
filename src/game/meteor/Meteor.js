import * as THREE from "three";

class Meteor {
  constructor() {
    const geometry = new THREE.TetrahedronGeometry(20, 8);
    const material = new THREE.MeshPhongMaterial({
      color: 0x808080,
      shininess: 0,
      specular: 0xffffff,
      flatShading: true,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.castShadow = true;
  }
}

export default Meteor;
