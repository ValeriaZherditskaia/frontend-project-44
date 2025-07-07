import { playGame } from '../index.js'
import { random } from '../helpers.js'
import { isEven } from '../helpers.js'

const exercise = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRound = () => {
  const randomInt = random(0, 100)
  const correctAnswer = isEven(randomInt) ? 'yes' : 'no'
  return { question: randomInt, correctAnswer }
}

export const parityCheck = () => {
  playGame(exercise, generateRound)
}
