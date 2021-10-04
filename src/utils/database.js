import "../../config/firebase";
import { getDatabase, ref, set, get } from "firebase/database";

const db = getDatabase();

const saveUserNickname = (nickname) => {
  set(ref(db, "scoreboard/" + nickname), {
    nickname,
  });
};

const saveUserScore = (score, nickname) => {
  set(ref(db, "scoreboard/" + nickname), {
    score,
  });
};

const getScoreBoard = () => {};

export { saveUserNickname, saveUserScore, getScoreBoard };
