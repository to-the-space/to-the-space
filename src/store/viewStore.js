import { makeObservable, observable, action, computed } from "mobx";

import { STATE } from "../constants/view";

const mainContainer = document.getElementById("ui");

class ViewStore {
  currentState = STATE.LOAD;
  energy = 0;

  constructor() {
    makeObservable(this, {
      currentState: observable,
      energy: observable,
      updateState: action,
      updateEnergy: action,
    });
  }

  updateState(newState) {
    for (const key in STATE) {
      mainContainer.classList.remove(STATE[key]);
    }

    mainContainer.classList.add(newState);

    this.currentState = newState;
  }

  updateEnergy() {
    this.energy += 1.5;
  }
}

const viewStore = new ViewStore();

export default viewStore;
