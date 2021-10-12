import * as THREE from "three";

class Coin {
  constructor() {
    const geometry = new THREE.TetrahedronGeometry(8, 2);
    const material = new THREE.MeshPhongMaterial({
      color: 0x009999,
      shininess: 0,
      specular: 0xffffff,
      flatShading: true,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.castShadow = true;
    this.angle = 0;
    this.distance = 0;
  }
}

export default Coin;
