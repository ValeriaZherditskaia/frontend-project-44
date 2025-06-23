import { greetUser } from "../src/cli.js";
import readlineSync from "readline-sync";

export const parityCheck = () => {
  const userName = greetUser();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    let randomInt = Math.floor(Math.random() * 101);
    const correctAnswer = randomInt % 2 === 0 ? "yes" : "no";
    console.log(`Question: ${randomInt}`);
    const userAnswer = readlineSync.question("Your answer:");

    if (correctAnswer !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    } else if (i === 2) {
      return console.log(`Congratulations, ${userName}!`);
    } else {
      console.log("Correct!");
    }
  }
};
