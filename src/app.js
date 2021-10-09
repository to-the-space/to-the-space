import "./styles/style.scss";
import gsap from "gsap";
import * as THREE from "three";
import { autorun } from "mobx";

import UserStore from "./store/userStore";
import ViewStore from "./store/viewStore";

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

    this.view = new ViewStore();
    this.user = new UserStore();

    autorun(() => {
      switch (this.view.currentState) {
        case STATE.LOADING:
          this.loading();
          break;
        case STATE.START:
          this.starting();
          break;
        case STATE.SETTING:
          this.setting();
          break;
        case STATE.PLAY:
          this.playing();
          break;
      }
    });

    this.world = new World(this.dom.canvas, this.loadingManager);
  }

  loading() {
    this.view.updateState(STATE.LOADING);

    this.loadingManager = new THREE.LoadingManager();

    this.loadingManager.onLoad = () => {
      gsap.delayedCall(0.5, () => {
        this.view.updateState(STATE.START);

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
        this.view.updateState(STATE.SETTING);

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
      this.view.updateState(STATE.PLAY);
    });
  }

  playing() {
    let count = 10;

    const intervalID = setInterval(() => {
      count--;
      this.dom.text.countDown.textContent = count;

      if (count < 0) {
        this.dom.text.countDown.textContent = "";
        clearInterval(intervalID);
      }
    }, 1000);

    setTimeout(() => {
      this.spaceship.launch();
    }, 10000);
  }
}

new App();
