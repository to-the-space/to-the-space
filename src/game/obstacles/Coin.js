import * as THREE from "three";

const Coin = () => {
  const name = "Coin";

  const geometry = new THREE.TetrahedronGeometry(8, 2);
  const material = new THREE.MeshPhongMaterial({
    color: 0xffd700,
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

export default Coin;
