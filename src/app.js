import "./style";

import gsap from "gsap";
import * as THREE from "three";
import { autorun } from "mobx";

import playStore from "./store/playStore";
import userStore from "./store/userStore";
import viewStore from "./store/viewStore";

import { STATE } from "./constants/view";

import { postUserScore, getScoreList } from "./utils/database";
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
      gameOver: document.querySelector("game-end"),
      scoreboard: document.querySelector(".scoreboard"),
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
      energy: {
        guide: document.querySelector(".space-bar-guide"),
        bar: document.querySelector(".energy-bar"),
      },
      text: {
        speed: document.querySelector(".speed"),
        altitude: document.querySelector(".altitude"),
        countDown: document.querySelector(".count-down"),
        inputError: document.querySelector(".input-error"),
        userScore: document.querySelector(".user-score"),
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
      }
    });

    autorun(() => {
      this.dom.text.speed.textContent = playStore.speed;
      this.dom.text.altitude.textContent = playStore.altitude;
    });

    viewStore.updateState(STATE.LOAD);
    this.world = new World(this.dom.canvas, this.loadingManager);
  }

  loading() {
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
  }

  starting() {
    this.dom.button.start.addEventListener("click", async () => {
      const nicknameInput = this.dom.input.nickname.value;

      if (!nicknameInput) {
        showInputError(this.dom.text.inputError, "please input your nickname");
        return;
      }

      showView(this.dom.gameSetting, 1);
      this.dom.text.inputError.textContent = "";

      userStore.setNickname(nicknameInput);
      viewStore.updateState(STATE.SET);
    });
  }

  setting() {
    this.dom.button.launch.addEventListener("click", () => {
      userStore.resetScore();
      viewStore.updateState(STATE.PLAY);
    });
  }

  playing() {
    let count = 5;
    let energy = 0;

    this.dom.energy.bar.style.height = `${energy}%`;

    const timeline = gsap.timeline({ repeat: -1 });
    timeline.to(this.dom.energy.guide, { backgroundColor: "#D3D3D3", duration: 0.1 });
    timeline.to(this.dom.energy.guide, { backgroundColor: "#080808", duration: 0.1 });

    const handleSpaceBarDown = (event) => {
      if (event.repeat) {
        return;
      }

      if (event.key === " " && energy < 100) {
        energy += 1.5;

        this.dom.energy.bar.style.height = `${energy}%`;

        playStore.addPower();
      }
    };

    document.addEventListener("keydown", handleSpaceBarDown);

    const intervalID = setInterval(() => {
      count--;

      this.dom.text.countDown.textContent = count;

      if (count < 0) {
        this.dom.text.countDown.textContent = 5;
        clearInterval(intervalID);
      }
    }, 1000);

    setTimeout(() => {
      timeline.clear();
      document.removeEventListener("keydown", handleSpaceBarDown);

      playStore.setIsLaunched(true);
      viewStore.updateState(STATE.LAUNCH);
    }, 5000);
  }

  launching() {
    this.dom.text.altitude.textContent = playStore.altitude;
    this.dom.text.speed.textContent = playStore.speed;
  }

  async ending() {
    const nickname = userStore.nickname;
    const score = userStore.score;

    this.dom.text.userScore.textContent = score;

    postUserScore(nickname, score);

    const scoreList = await getScoreList();

    scoreList.map((info, index) => {
      const scoreElement = document.createElement("li");
      scoreElement.classList.add("score-element");

      const nickname = document.createElement("span");
      nickname.textContent = `${index + 1}.  ${info.nickname}`;
      nickname.classList.add("nickname");
      scoreElement.append(nickname);

      const score = document.createElement("span");
      score.textContent = `${info.score} KM`;
      score.classList.add("score");
      scoreElement.append(score);

      this.dom.scoreboard.append(scoreElement);
    });

    this.dom.button.restart.addEventListener("click", () => {
      while (this.dom.scoreboard.children.length > 1) {
        this.dom.scoreboard.removeChild(this.dom.scoreboard.lastChild);
      }

      viewStore.updateState(STATE.SET);
    });
  }
}

new App();
