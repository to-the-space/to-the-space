import * as THREE from "three";
import "./style.css";

import { saveUserNickname } from "./utils/database";
import { showView, hideView, showInputError } from "./utils/transition";

import { World } from "./game/World";
import { Stars } from "./game/Stars";
import { SpaceShip } from "./game/SpaceShip";

class App {
  constructor() {
    this.dom = {
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

    window.addEventListener("load", this.loading(), false);

    this.dom.button.startButton.addEventListener("click", () => {
      if (this.dom.input.nicknameInput.value) {
        this.start();
        showView(this.dom.gameSetting, 1);
        hideView(this.dom.gameStart);
        this.dom.text.inputError.textContent = "";
      } else {
        showInputError(this.dom.text.inputError);
      }
    });

    this.world = new World(this);
    this.stars = new Stars(this);
    this.spaceShip = new SpaceShip(this);
  }

  loading() {
    showView(this.dom.gameLoading, 0);

    this.loadingManager = new THREE.LoadingManager();

    this.loadingManager.onLoad = () => {
      showView(this.dom.canvas, 1);
      showView(this.dom.gameStart, 1);
      hideView(this.dom.gameLoading);
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
    const nickname = this.dom.input.nicknameInput.value;
    saveUserNickname(nickname);
  }

  setting() {}

  playing() {}

  result() {}

  error() {}
}

const app = new App();
