import * as CANNON from "cannon-es";
import { autorun } from "mobx";

import { STATE } from "../../constants/view";

import Model from "./Model";
import Controls from "../Controls";

import playStore from "../../store/playStore";
import viewStore from "../../store/viewStore";

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
      this.boxBody.position.x -= 1;
    }
    if (this.input.keys.right) {
      this.boxBody.position.x += 1;
    }
  }

  launch() {
    const power = playStore.power;
    this.boxBody.applyForce(new CANNON.Vec3(0, power, 0), this.boxBody.position);
  }

  update() {
    this.model.position.copy(this.boxBody.position);
    this.model.quaternion.copy(this.boxBody.quaternion);

    const speed = Math.floor(this.boxBody.velocity.y);
    if (speed > -1) {
      this.enableControl();
      playStore.changeSpeed(speed);
    }

    const altitude = Math.floor(this.model.position.y);
    if (altitude > -1) {
      playStore.changeAltitude(altitude);
      playStore.setHighestAltitude(altitude);
    }

    if (speed < 0) {
      viewStore.updateState(STATE.END);
    }
  }
}

export default Spaceship;
