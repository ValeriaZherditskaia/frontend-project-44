import { playGame } from "../index.js";

export const calculator = () => {
  const exercise = "What is the result of the expression?";
  const operations = ["+", "-", "*"];

  const generateRound = () => {
    const randomIndex = Math.floor(Math.random() * operations.length);
    const randomOperation = operations[randomIndex];

    const randomInt1 = Math.floor(Math.random() * 101);
    const randomInt2 = Math.floor(Math.random() * 101);

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
