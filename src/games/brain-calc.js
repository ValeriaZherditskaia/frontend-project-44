import { playGame } from "../index.js";
import { random } from "../index.js";

export const calculator = () => {
  const exercise = "What is the result of the expression?";
  const operations = ["+", "-", "*"];

  const generateRound = () => {
    const randomIndex = random(0, operations.length - 1);
    const randomOperation = operations[randomIndex];

    const randomInt1 = random(0, 100);
    const randomInt2 = random(0, 100);

    const question = `${randomInt1} ${randomOperation} ${randomInt2}`;

    let correctAnswer;
    switch (randomOperation) {
      case "+":
        correctAnswer = String(randomInt1 + randomInt2);
        break;
      case "-":
        correctAnswer = String(randomInt1 - randomInt2);
        break;
      case "*":
        correctAnswer = String(randomInt1 * randomInt2);
        break;
    }
    return { question, correctAnswer };
  };

  playGame(exercise, generateRound);
};
