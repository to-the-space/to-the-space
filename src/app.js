import * as THREE from "three";
import gsap from "gsap";
import "./styles.scss";

import { saveUserNickname } from "./utils/database";
import { showView, showInputError } from "./utils/transition";

import { World } from "./game/World";
import { Stars } from "./game/Stars";
import { SpaceShip } from "./game/SpaceShip";

class App {
  constructor() {
    this.STATES = {
      LOADING: "loading",
      START: "start",
      SETTING: "setting",
    };

    this.dom = {
      mainContainer: document.getElementById("ui"),
      canvas: document.querySelector("canvas.webgl"),
      gameLoading: document.querySelector(".game-loading"),
      gameStart: document.querySelector(".game-start"),
      gameSetting: document.querySelector(".game-setting"),
      gamePlay: document.querySelector(".game-play"),
      gameOver: document.querySelector(".game-over"),
      gameScoreboard: document.querySelector(".gameScoreBoard"),
      gameError: document.querySelector(".game-error"),
      input: {
        nicknameInput: document.querySelector(".nickname-input"),
      },
      button: {
        startButton: document.querySelector(".start-button"),
        launchButton: document.querySelector(".launch-button"),
        restartButton: document.querySelector(".restart-button"),
      },
      loading: {
        loadingBar: document.querySelector(".loading-bar"),
        loadingPercentage: document.querySelector(".loading-percentage"),
      },
      text: {
        inputError: document.querySelector(".input-error"),
        errorText: document.querySelector("error-text"),
      },
    };

    this.updateState(this.STATES.LOADING);

    this.world = new World(this);
    this.stars = new Stars(this);
    this.spaceShip = new SpaceShip(this);
  }

  updateState(newState) {
    for (const key in this.STATES) {
      this.dom.mainContainer.classList.remove(this.STATES[key]);
    }

    this.dom.mainContainer.classList.add(newState);

    this.state = newState;
    this.onAction();
  }

  onAction() {
    switch (this.state) {
      case this.STATES.LOADING:
        this.loading();
        break;
      case this.STATES.START:
        this.start();
        break;
      case this.STATES.SETTING:
        this.setting();
        break;
    }
  }

  loading() {
    this.loadingManager = new THREE.LoadingManager();

    this.loadingManager.onLoad = () => {
      gsap.delayedCall(0.5, () => {
        this.updateState(this.STATES.START);
        showView(this.dom.canvas, 1);
        showView(this.dom.gameStart, 1);
      });
    };

    this.loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      const progressRatio = itemsLoaded / itemsTotal;
      const percentage = Math.floor(progressRatio * 100);

      this.dom.loading.loadingBar.style.transform = `scaleX(${progressRatio})`;
      this.dom.loading.loadingPercentage.textContent = `${percentage}%`;
    };

    this.loadingManager.onError = () => {};
  }

  start() {
    this.dom.button.startButton.addEventListener("click", () => {
      if (this.dom.input.nicknameInput.value) {
        this.updateState(this.STATES.SETTING);
        showView(this.dom.gameSetting, 1);
        this.dom.text.inputError.textContent = "";

        const nickname = this.dom.input.nicknameInput.value;
        saveUserNickname(nickname);
      } else {
        showInputError(this.dom.text.inputError);
      }
    });
  }

  setting() {}

  playing() {}

  result() {}

  error() {}
}

new App();
