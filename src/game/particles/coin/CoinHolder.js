import * as THREE from "three";

import Coin from "./Coin";

class CoinHolder {
  constructor(coinNumber) {
    this.mesh = new THREE.Object3D();
    this.coinInUse = [];
    this.coinPool = [];
    this.counter = 0;

    for (let i = 0; i < coinNumber; i++) {
      const coin = new Coin();

      this.coinPool.push(coin);
    }
  }

  spawnCoin(spaceship) {
    this.counter++;

    if (this.counter % 50 !== 0) return;

    const coinNumber = 10;

    const distance = 600 + 100 + (-1 + Math.random() * 2) * 60;
    const amplitude = 10 + Math.round(Math.random() * 10);

    for (let i = 0; i < coinNumber; i++) {
      let coin;

      if (this.coinPool.length) {
        coin = this.coinPool.pop();
      } else {
        coin = new Coin();
      }

      this.mesh.add(coin.mesh);
      this.coinInUse.push(coin);

      coin.angle = -(i * 0.02);
      coin.distance = distance + Math.cos(i * 0.5) * amplitude;

      coin.mesh.position.y = spaceship.position.y + 1000 + Math.floor(Math.random() * 40);
      coin.mesh.position.x = -1000 + Math.floor(Math.random() * 2000);
    }
  }

  update(spaceship, physicsSpaceship, deltaTime) {
    for (let i = 0; i < this.coinInUse.length; i++) {
      const coin = this.coinInUse[i];

      if (coin.exploding) continue;

      coin.angle += deltaTime * 0.25;

      if (coin.angle > Math.PI * 2) {
        coin.angle -= Math.PI * 20;
      }

      coin.mesh.position.x += Math.cos(deltaTime);
      coin.mesh.position.z = 10;

      coin.mesh.rotation.z += Math.random() * 0.1;
      coin.mesh.rotation.y += Math.random() * 0.1;

      const differentPosition = spaceship.position.clone().sub(coin.mesh.position.clone());
      const distance = differentPosition.length();

      if (distance < 50) {
        this.coinPool.unshift(this.coinInUse.splice(i, 1)[0]);
        this.mesh.remove(coin.mesh);

        physicsSpaceship.velocity.y += 20;

        i--;
      } else if (coin.angle > Math.PI) {
        this.coinPool.unshift(this.coinInUse.splice(i, 1)[0]);
        this.mesh.remove(coin.mesh);

        i--;
      }
    }
  }
}

export default CoinHolder;
