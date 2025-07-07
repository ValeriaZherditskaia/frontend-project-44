import { playGame } from '../index.js'
import { random } from '../helpers.js'
import { calculate } from '../helpers.js'

const exercise = 'What is the result of the expression?'
const operations = ['+', '-', '*']

export const calculator = () => {
  const generateRound = () => {
    const randomIndex = random(0, operations.length - 1)
    const randomOperation = operations[randomIndex]

    const randomInt1 = random(0, 100)
    const randomInt2 = random(0, 100)

    const question = `${randomInt1} ${randomOperation} ${randomInt2}`
    const correctAnswer = String(calculate(randomInt1, randomInt2, randomOperation))
    return { question, correctAnswer }
  }

  playGame(exercise, generateRound)
}
