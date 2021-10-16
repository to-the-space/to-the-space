import * as THREE from "three";

const Meteor = () => {
  const name = "Meteor";

  const randomRadius = 10 + Math.floor(Math.random() * 30);
  const geometry = new THREE.TetrahedronGeometry(randomRadius, 4);
  const material = new THREE.MeshPhongMaterial({
    color: 0x808080,
    shininess: 0,
    specular: 0xffffff,
    flatShading: true,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;

  return Object.freeze({
    name,
    mesh,
  });
};

export default Meteor;
