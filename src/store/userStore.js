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

  addNickname() {}

  addScore() {}
}

export default UserStore;
