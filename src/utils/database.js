import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, push, query } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const scoreBoardRef = ref(db, "scoreboard");

const postUserScore = (nickname, score) => {
  const newPostRef = push(scoreBoardRef);
  set(newPostRef, {
    nickname,
    score,
  });
};

const getScoreList = async () => {
  const snapshot = await get(query(scoreBoardRef));
  const scoreBoard = Object.values(snapshot.val());

  scoreBoard.sort((a, b) => b.score - a.score);

  return scoreBoard.slice(0, 10);
};

const validateNickname = async (nickname) => {
  const snapshot = await get(query(scoreBoardRef));

  if (snapshot.val()) {
    const scoreBoard = Object.values(snapshot.val());
    const hasNickname = scoreBoard.some((userInfo) => userInfo.nickname === nickname);

    return hasNickname;
  }

  return false;
};

export { postUserScore, getScoreList, validateNickname };
