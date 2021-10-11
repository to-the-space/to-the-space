import * as CANNON from "cannon-es";
import { autorun } from "mobx";

import Model from "./Model";
import Controls from "../Controls";

import playStore from "../../store/playStore";

class Spaceship extends Model {
  constructor(model, scene, physicsWorld) {
    super(model, scene, physicsWorld);

    this.input = new Controls();

    autorun(() => {
      if (playStore.isLaunched) {
        this.launch();
        playStore.setIsLaunched(false);
      }
    });
  }

  enableControl() {
    if (this.model.position.x < -500 || this.model.position.x > 500) {
      return;
    }
    if (this.input.keys.left) {
      this.model.position.x -= 0.4;
    }
    if (this.input.keys.right) {
      this.model.position.x += 0.4;
    }
  }

  launch() {
    const power = playStore.power;

    this.boxBody.applyForce(new CANNON.Vec3(0, power, 0), this.boxBody.position);

    this.boxBody.addEventListener("collide", () => {});
  }

  update() {
    this.model.position.copy(this.boxBody.position);
    this.model.quaternion.copy(this.boxBody.quaternion);

    const altitude = Math.floor(this.model.position.y);
    playStore.changeAltitude(altitude);
  }
}

export default Spaceship;
