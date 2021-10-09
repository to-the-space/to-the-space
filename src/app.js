import "./styles/style.scss";
import * as THREE from "three";
import gsap from "gsap";

import { saveUserNickname } from "./utils/database";
import { showView, showInputError } from "./utils/transition";

import { World } from "./game/World";
import { Spaceship } from "./game/Spaceship";
import { LaunchPad } from "./game/LaunchPad";
import { Earth } from "./game/Earth";
import { Moon } from "./game/moon";
import { SpaceStation } from "./game/SpaceStation";
import { SkyBox } from "./game/SkyBox";

import { useHelpers } from "./utils/helper";

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

    this.world = new World(this.dom.canvas);

    this.moon = new Moon(this);
    this.earth = new Earth(this);
    this.skyBox = new SkyBox(this);
    this.launchPad = new LaunchPad(this);
    this.spaceship = new Spaceship(this);
    this.spaceStation = new SpaceStation(this);
    // useHelpers(this.world.scene, 1000, 2);
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
        this.starting();
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

  starting() {
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
      this.world.scene.add(this.earth.earth);
      this.updateState(this.STATES.PLAY);
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
