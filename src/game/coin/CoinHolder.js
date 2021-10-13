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

    const coinNumber = 3;

    for (let i = 0; i < coinNumber; i++) {
      let coin;

      if (this.coinPool.length) {
        coin = this.coinPool.pop();
      } else {
        coin = new Coin();
      }

      this.mesh.add(coin.mesh);
      this.coinInUse.push(coin);

      const fromX = window.innerWidth * 0.5;
      const toX = window.innerWidth;

      const fromY = window.innerWidth;
      const toY = window.innerWidth * 0.5;

      coin.mesh.position.y = spaceship.position.y + fromY + Math.floor(Math.random() * toY);
      coin.mesh.position.x = -fromX + Math.floor(Math.random() * toX);
    }
  }

  update(spaceship, physicsSpaceship, deltaTime) {
    for (let i = 0; i < this.coinInUse.length; i++) {
      const coin = this.coinInUse[i];

      coin.mesh.position.x += Math.sin(deltaTime);
      coin.mesh.position.z = 10;

      coin.mesh.rotation.z += Math.random() * 0.1;
      coin.mesh.rotation.y += Math.random() * 0.1;

      const differentPosition = spaceship.position.clone().sub(coin.mesh.position.clone());
      const distance = differentPosition.length();
      const maxDistance = spaceship.position.y - 300;

      if (distance < 50) {
        this.coinPool.unshift(this.coinInUse.splice(i, 1)[0]);
        this.mesh.remove(coin.mesh);

        physicsSpaceship.velocity.y += 20;

        i--;
      } else if (coin.mesh.position.y < maxDistance) {
        this.coinPool.unshift(this.coinInUse.splice(i, 1)[0]);
        this.mesh.remove(coin.mesh);

        i--;
      }
    }
  }
}

export default CoinHolder;
