import "./styles/style.scss";

import gsap from "gsap";
import * as THREE from "three";
import { autorun } from "mobx";

import playStore from "./store/playStore";
import userStore from "./store/userStore";
import viewStore from "./store/viewStore";

import { STATE } from "./constants/view";

import { saveUserNickname } from "./utils/database";
import { showView, showInputError } from "./utils/transition";

import World from "./game/World";

class App {
  constructor() {
    this.dom = {
      mainContainer: document.getElementById("ui"),
      canvas: document.querySelector("canvas.webgl"),
      gameLoading: document.querySelector(".game-loading"),
      gameStart: document.querySelector(".game-start"),
      gameSetting: document.querySelector(".game-setting"),
      gamePlay: document.querySelector(".game-play"),
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
        speed: document.querySelector(".speed"),
        altitude: document.querySelector(".altitude"),
        energy: document.querySelector(".energy-box"),
        countDown: document.querySelector(".count-down"),
        inputError: document.querySelector(".input-error"),
      },
    };

    autorun(() => {
      switch (viewStore.currentState) {
        case STATE.LOAD:
          this.loading();
          break;
        case STATE.START:
          this.starting();
          break;
        case STATE.SET:
          this.setting();
          break;
        case STATE.PLAY:
          this.playing();
          break;
        case STATE.LAUNCH:
          this.launching();
          break;
        case STATE.END:
          this.ending();
          break;
        case STATE.SCOREBOARD:
          this.scoreboard();
          break;
      }
    });

    autorun(() => {
      this.dom.text.speed.textContent = playStore.speed;
      this.dom.text.altitude.textContent = playStore.altitude;
    });

    autorun(() => {
      this.dom.text.energy.textContent = playStore.power;
    });

    this.world = new World(this.dom.canvas, this.loadingManager);
  }

  loading() {
    viewStore.updateState(STATE.LOAD);

    this.loadingManager = new THREE.LoadingManager();

    this.loadingManager.onLoad = () => {
      gsap.delayedCall(0.5, () => {
        viewStore.updateState(STATE.START);

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

  starting() {
    this.dom.button.start.addEventListener("click", () => {
      if (this.dom.input.nickname.value) {
        viewStore.updateState(STATE.SET);

        showView(this.dom.gameSetting, 1);
        this.dom.text.inputError.textContent = "";

        const nickname = this.dom.input.nickname.value;

        saveUserNickname(nickname);

        userStore.addNickname(nickname);
      } else {
        showInputError(this.dom.text.inputError);
      }
    });
  }

  setting() {
    this.dom.button.launch.addEventListener("click", () => {
      viewStore.updateState(STATE.PLAY);
    });
  }

  playing() {
    let count = 5;

    const handleSpaceBarDown = document.addEventListener("keydown", (event) => {
      event.preventDefault();

      if (event.repeat) return;

      if (event.key === " ") {
        playStore.addPower();
      }
    });

    const intervalID = setInterval(() => {
      count--;
      this.dom.text.countDown.textContent = count;
      if (count < 0) {
        this.dom.text.countDown.textContent = 5;
        clearInterval(intervalID);
      }
    }, 1000);

    setTimeout(() => {
      playStore.setIsLaunched(true);
      viewStore.updateState(STATE.LAUNCH);
      document.removeEventListener("keydown", handleSpaceBarDown);
    }, 5000);
  }

  launching() {
    this.dom.text.altitude.textContent = playStore.altitude;
    this.dom.text.speed.textContent = playStore.speed;
  }
}

new App();
