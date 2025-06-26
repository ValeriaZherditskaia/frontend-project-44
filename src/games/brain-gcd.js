import { playGame } from "../index.js";
import { random } from "../index.js";

export const gameGCD = () => {
  const exercise = "Find the greatest common divisor of given numbers.";

  const generateRound = () => {
    let randomInt1 = random(0, 100);
    let randomInt2 = random(0, 100);

    const question = `${randomInt1} ${randomInt2}`;

    if (randomInt2 === 0) {
      return { question, correctAnswer: String(randomInt1) };
    }

    while (randomInt2 !== 0) {
      const remainder = randomInt1 % randomInt2;
      randomInt1 = randomInt2;
      randomInt2 = remainder;
    }

    return { question, correctAnswer: String(randomInt1) };
  };

  playGame(exercise, generateRound);
};
