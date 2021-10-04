import * as THREE from "three";
import gsap from "gsap";
import "./style.css";

import { World } from "./game/World";
import { SpaceShip } from "./game/SpaceShip";
import { Stars } from "./game/Stars";

const STATES = {
  LOADING: 0,
  SETTING: 1,
  PLAYING: 2,
  ENDED: 3,
  RESULT: 4,
  ERROR: 5,
};

class App {
  constructor() {
    this.state = STATES.LOADING;

    this.dom = {
      canvas: document.querySelector("canvas.webgl"),
      gameLoading: document.querySelector(".game-loading"),
      gameStart: document.querySelector(".game-start"),
      gameSetting: document.querySelector(".game-setting"),
      gameOver: document.querySelector(".game-over"),
      gameScoreboard: document.querySelector(".gameScoreBoard"),
      gameError: document.querySelector(".game-error"),
      button: {
        startButton: document.querySelector(".start-button"),
        LaunchButton: document.querySelector(".launch-button"),
        restartButton: document.querySelector(".restart-button"),
      },
      loading: {
        loadingBar: document.querySelector(".loading-bar"),
        loadingPercentage: document.querySelector(".loading-percentage"),
      },
      text: {
        errorText: document.querySelector("error-text"),
      },
    };

    this.loading();

    this.world = new World(this);
    this.spaceShip = new SpaceShip(this);
    this.stars = new Stars(this);
  }

  updateState(newState) {
    this.state = newState;
  }

  loading() {
    gsap.to(this.dom.gameLoading, { opacity: 1 });

    this.loadingManager = new THREE.LoadingManager();

    this.loadingManager.onLoad = () => {
      gsap.to(this.dom.canvas, { opacity: 1, duration: 1 });
      gsap.to(this.dom.gameStart, { opacity: 1, duration: 1 });
      gsap.to(this.dom.gameLoading, { opacity: 0 });

      this.dom.loading.loadingBar.classList.add("ended");
      this.dom.loading.loadingBar.style.transform = "";
    };

    this.loadingManager.onProgress = async (url, itemsLoaded, itemsTotal) => {
      const progressRatio = itemsLoaded / itemsTotal;
      const percentage = Math.floor(progressRatio * 100);

      this.dom.loading.loadingBar.style.transform = `scaleX(${progressRatio})`;
      this.dom.loading.loadingPercentage.textContent = `${percentage}%`;
    };

    this.loadingManager.onError = async () => {
      this.updateState(STATES.ERROR);
    };
  }

  start() {}

  setting() {}

  playing() {}

  result() {}

  error() {}
}

const app = new App();
