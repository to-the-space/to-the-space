import { makeObservable, observable, action, computed } from "mobx";

class PlayStore {
  isLaunched = false;
  speed = 0;
  altitude = 0;
  power = 0;

  constructor() {
    makeObservable(this, {
      isLaunched: observable,
      speed: observable,
      altitude: observable,
      power: observable,
      changeSpeed: action,
      changeAltitude: action,
      addPower: action,
      setIsLaunched: action,
    });
  }

  setIsLaunched(state) {
    this.isLaunched = state;
  }

  changeSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  changeAltitude(newAltitude) {
    this.altitude = newAltitude;
  }

  addPower() {
    this.power += 100;
  }
}

const playStore = new PlayStore();

export default playStore;
