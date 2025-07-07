import { playGame } from '../index.js'
import { random } from '../helpers.js'
import { checkPrime } from '../helpers.js'

const exercise = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const makePrimeRound = () => {
  const randomInt = random(0, 100)
  const correctAnswer = checkPrime(randomInt) ? 'yes' : 'no'
  return { question: randomInt, correctAnswer }
}

export const isPrime = () => {
  playGame(exercise, makePrimeRound)
}
