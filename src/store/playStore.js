import { makeObservable, observable, action, computed } from "mobx";

class PlayStore {
  angle;
  power;

  constructor() {
    makeObservable(this, {
      angle: observable,
      power: observable,
      changeAngle: action,
      changeEnginePower: action,
    });
  }

  changeAngle() {}

  changeEnginePower() {}
}

export default PlayStore;
