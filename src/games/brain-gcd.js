import { playGame } from '../index.js'
import { random } from '../helpers.js'
import { gcd } from '../helpers.js'

const exercise = 'Find the greatest common divisor of given numbers.'

const generateRound = () => {
  const randomInt1 = random(0, 100)
  const randomInt2 = random(0, 100)
  const question = `${randomInt1} ${randomInt2}`
  const correctAnswer = String(gcd(randomInt1, randomInt2))
  return { question, correctAnswer }
}

export const gameGCD = () => {
  playGame(exercise, generateRound)
}
