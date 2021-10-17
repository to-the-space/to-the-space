import { makeObservable, observable, action } from "mobx";

class PlayStore {
  speed = 0;
  power = 0;
  altitude = 0;
  isLaunched = false;

  constructor() {
    makeObservable(this, {
      power: observable,
      speed: observable,
      altitude: observable,
      isLaunched: observable,
      reset: action,
      addPower: action,
      changeSpeed: action,
      setIsLaunched: action,
      changeAltitude: action,
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
    this.power += 1500;
  }

  reset() {
    this.speed = 0;
    this.power = 0;
    this.altitude = 0;
    this.isLaunched = false;
  }
}

const playStore = new PlayStore();

export default playStore;
