import { makeObservable, observable, action, computed } from "mobx";

class UserStore {
  nickname = "";
  score = 0;

  constructor() {
    makeObservable(this, {
      nickname: observable,
      score: observable,
      addNickname: action,
      addScore: action,
    });
  }

  addNickname(nickname) {
    this.nickname = nickname;
  }

  addScore(score) {
    this.score = score;
  }
}

const userStore = new UserStore();

export default userStore;
