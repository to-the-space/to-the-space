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
    const max = window.innerWidth * 0.5 - 100;

    if (this.input.keys.left && this.model.position.x > -max) {
      this.boxBody.position.x -= 2;
    }
    if (this.input.keys.right && this.model.position.x < max) {
      this.boxBody.position.x += 2;
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
      playStore.reset();

      this.setPosition(0, 0, 0);
      this.boxBody.position.copy(this.model.position);

      viewStore.updateState(STATE.END);
    }
  }
}

export default Spaceship;
