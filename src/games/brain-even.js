import { playGame } from '../index.js'
import { random } from '../index.js'

export const parityCheck = () => {
  const exercise = 'Answer "yes" if the number is even, otherwise answer "no".'

  const generateRound = () => {
    const randomInt = random(0, 100)
    const correctAnswer = randomInt % 2 === 0 ? 'yes' : 'no'
    return { question: randomInt, correctAnswer }
  }

  playGame(exercise, generateRound)
}
