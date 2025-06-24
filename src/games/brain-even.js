import { playGame } from "../index.js";

export const parityCheck = () => {
  const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRound = () => {
    const randomInt = Math.floor(Math.random() * 101);
    const correctAnswer = randomInt % 2 === 0 ? "yes" : "no";
    return { question: randomInt, correctAnswer };
  };

  playGame(exercise, generateRound);
};
