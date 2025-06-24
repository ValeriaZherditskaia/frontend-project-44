import { greetUser } from "./cli.js";
import readlineSync from "readline-sync";

export const playGame = (exercise, generateRound) => {
  const userName = greetUser();
  const roundsCount = 3;

  console.log(exercise); //задание

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = generateRound();

    console.log(`Question: ${question}`); // конкретный вопрос
    const userAnswer = readlineSync.question("Your answer:"); // ответ игрока

    if (correctAnswer !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log("Correct!");
  }

  console.log(`Congratulations, ${userName}!`);
};
