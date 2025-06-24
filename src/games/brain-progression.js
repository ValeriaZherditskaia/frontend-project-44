import { playGame } from "../index.js";

export const progressionGame = () => {
  const exercise = "What number is missing in the progression?";

  const generateRound = () => {
    const generateProgression = (start, step, length) => {
      const progression = [];
      for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
      }
      return progression;
    };

    const start = Math.floor(Math.random() * 6);
    const step = Math.floor(Math.random() * 6) + 1; // +1 чтобы шаг не был равен 0
    const lengthProgression = 10;

    const progression = generateProgression(start, step, lengthProgression);

    const randomIndexArr = Math.floor(Math.random() * 10);
    const correctAnswer = String(progression[randomIndexArr]);
    progression[randomIndexArr] = "..";
    const question = progression.join(" ");

    return { question, correctAnswer };
  };

  playGame(exercise, generateRound);
};
