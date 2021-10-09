import { makeObservable, observable, action, computed } from "mobx";

import { STATE } from "../constants/view";

const mainContainer = document.getElementById("ui");

class ViewStore {
  currentState = STATE.LOADING;

  constructor() {
    makeObservable(this, {
      currentState: observable,
      updateState: action,
    });
  }

  updateState(newState) {
    for (const key in STATE) {
      mainContainer.classList.remove(STATE[key]);
    }

    mainContainer.classList.add(newState);

    this.currentState = newState;
  }
}

export default ViewStore;
