import { makeObservable, observable, action } from "mobx";

class PlayStore {
  isLaunched = false;
  speed = 0;
  altitude = 0;
  power = 0;
  highestAltitude = 0;

  constructor() {
    makeObservable(this, {
      isLaunched: observable,
      speed: observable,
      altitude: observable,
      highestAltitude: observable,
      power: observable,
      changeSpeed: action,
      changeAltitude: action,
      addPower: action,
      setIsLaunched: action,
      reset: action,
    });
  }

  reset() {
    this.isLaunched = false;
    this.speed = 0;
    this.altitude = 0;
    this.power = 0;
    this.highestAltitude = 0;
  }

  setHighestAltitude(newAltitude) {
    this.highestAltitude = Math.max(this.highestAltitude, newAltitude);
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
}

const playStore = new PlayStore();

export default playStore;
