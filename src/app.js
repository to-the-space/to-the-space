import "./styles/style.scss";
import * as THREE from "three";
import gsap from "gsap";

import { saveUserNickname } from "./utils/database";
import { showView, showInputError } from "./utils/transition";

import { World } from "./game/World";
import { Stars } from "./game/Stars";
import { SpaceShip } from "./game/SpaceShip";
import { LaunchPad } from "./game/LaunchPad";
import { SpaceStation } from "./game/SpaceStation";
import { Controls } from "./game/Controls";

class App {
  constructor() {
    this.STATES = {
      LOADING: "loading",
      START: "start",
      SETTING: "setting",
      PLAY: "play",
    };

    this.dom = {
      mainContainer: document.getElementById("ui"),
      canvas: document.querySelector("canvas.webgl"),
      gameLoading: document.querySelector(".game-loading"),
      gameStart: document.querySelector(".game-start"),
      gameSetting: document.querySelector(".game-setting"),
      gamePlay: document.querySelector(".game-play"),
      gameOver: document.querySelector(".game-over"),
      gameError: document.querySelector(".game-error"),
      input: {
        nickname: document.querySelector(".nickname-input"),
      },
      button: {
        start: document.querySelector(".start-button"),
        launch: document.querySelector(".launch-button"),
        restart: document.querySelector(".restart-button"),
      },
      loading: {
        bar: document.querySelector(".loading-bar"),
        percentage: document.querySelector(".loading-percentage"),
      },
      text: {
        countDown: document.querySelector(".count-down"),
        inputError: document.querySelector(".input-error"),
      },
    };

    this.updateState(this.STATES.LOADING);

    this.world = new World(this);
    this.stars = new Stars(this);
    this.spaceShip = new SpaceShip(this);
    this.launchPad = new LaunchPad(this);
    this.spaceStation = new SpaceStation(this);
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
      case this.STATES.PLAY:
        this.playing();
        break;
    }
  }

  loading() {
    this.loadingManager = new THREE.LoadingManager();

    this.loadingManager.onLoad = () => {
      this.controls = new Controls(this);

      gsap.delayedCall(0.5, () => {
        this.updateState(this.STATES.START);
        showView(this.dom.canvas, 1);
        showView(this.dom.gameStart, 1);
      });
    };

    this.loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      const progressRatio = itemsLoaded / itemsTotal;
      const percentage = Math.floor(progressRatio * 100);

      this.dom.loading.bar.style.transform = `scaleX(${progressRatio})`;
      this.dom.loading.percentage.textContent = `${percentage}%`;
    };

    this.loadingManager.onError = () => {};
  }

  start() {
    this.dom.button.start.addEventListener("click", () => {
      if (this.dom.input.nickname.value) {
        this.updateState(this.STATES.SETTING);
        showView(this.dom.gameSetting, 1);
        this.dom.text.inputError.textContent = "";

        const nickname = this.dom.input.nickname.value;

        saveUserNickname(nickname);
      } else {
        showInputError(this.dom.text.inputError);
      }
    });
  }

  setting() {
    this.dom.button.launch.addEventListener("click", () => {
      this.updateState(this.STATES.PLAY);
    });
  }

  playing() {
    let count = 5;

    const intervalID = setInterval(() => {
      count--;
      this.dom.text.countDown.textContent = count;

      if (count < 3) {
        this.dom.text.countDown.textContent = "";
        clearInterval(intervalID);
      }
    }, 1000);

    setTimeout(() => {
      this.spaceShip.launch();
    }, 6000);

    setTimeout(() => {
      window.cancelAnimationFrame(this.spaceShip.launchRequestId);
    }, 30000);
  }

  result() {}

  error() {}
}

new App();
