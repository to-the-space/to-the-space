import { makeObservable, observable, action } from "mobx";

import { STATE } from "../constants/view";

const mainContainer = document.getElementById("ui");

class ViewStore {
  currentState = STATE.LOAD;

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

const viewStore = new ViewStore();

export default viewStore;
