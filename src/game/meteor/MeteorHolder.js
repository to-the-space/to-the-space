import * as THREE from "three";

import Meteor from "./Meteor";

class MeteorHolder {
  constructor(meteorNumber) {
    this.mesh = new THREE.Object3D();
    this.meteorArray = [];
    this.meteorPool = [];
    this.counter = 0;

    for (let i = 0; i < meteorNumber; i++) {
      const coin = new Meteor();

      this.meteorPool.push(coin);
    }
  }

  spawn(spaceship) {
    const meteorNumber = 3;

    this.counter++;

    if (this.counter % 50 !== 0) return;

    for (let i = 0; i < meteorNumber; i++) {
      let meteor;

      if (this.meteorPool.length) {
        meteor = this.meteorPool.pop();
      } else {
        meteor = new Meteor();
      }

      const fromX = window.innerWidth * 0.5;
      const toX = window.innerWidth;

      const fromY = window.innerWidth;
      const toY = window.innerWidth * 0.5;

      meteor.mesh.position.y = spaceship.position.y + fromY + Math.floor(Math.random() * toY);
      meteor.mesh.position.x = -fromX + Math.floor(Math.random() * toX);

      this.mesh.add(meteor.mesh);
      this.meteorArray.push(meteor);
    }
  }

  update(spaceship, physicsSpaceship, deltaTime) {
    for (let i = 0; i < this.meteorArray.length; i++) {
      const meteor = this.meteorArray[i];

      meteor.mesh.position.x += Math.sin(deltaTime);
      meteor.mesh.position.z = 10;

      meteor.mesh.rotation.z += Math.random() * 0.1;
      meteor.mesh.rotation.y += Math.random() * 0.1;

      const differentPosition = spaceship.position.clone().sub(meteor.mesh.position.clone());
      const distance = differentPosition.length();
      const maxDistance = spaceship.position.y - 1000;

      if (distance < 50) {
        this.meteorPool.unshift(this.meteorArray.splice(i, 1)[0]);
        this.mesh.remove(meteor.mesh);

        physicsSpaceship.velocity.y -= 100;

        i--;
      } else if (meteor.mesh.position.y < maxDistance) {
        this.meteorPool.unshift(this.meteorArray.splice(i, 1)[0]);
        this.mesh.remove(meteor.mesh);

        i--;
      }
    }
  }
}

export default MeteorHolder;
