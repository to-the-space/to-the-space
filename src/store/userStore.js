import { makeObservable, observable, action } from "mobx";

class UserStore {
  nickname = "";
  score = 0;

  constructor() {
    makeObservable(this, {
      score: observable,
      nickname: observable,
      setScore: action,
      resetScore: action,
      setNickname: action,
    });
  }

  setNickname(nickname) {
    this.nickname = nickname;
  }

  setScore(newScore) {
    this.score = Math.max(this.score, newScore);
  }

  resetScore() {
    this.score = 0;
  }
}

const userStore = new UserStore();

export default userStore;
