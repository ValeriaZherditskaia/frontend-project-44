import { playGame } from '../index.js'
import { random } from '../index.js'

export const isPrime = () => {
  const exercise = 'Answer "yes" if given number is prime. Otherwise answer "no".'

  const generateRound = () => {
    const randomInt = random(0, 100)
    if (randomInt < 2) return { question: randomInt, correctAnswer: 'no' }
    if (randomInt === 2) return { question: randomInt, correctAnswer: 'yes' }
    if (randomInt % 2 === 0) return { question: randomInt, correctAnswer: 'no' }

    for (let i = 3; i <= Math.sqrt(randomInt); i += 2) {
      if (randomInt % i === 0) {
        return { question: randomInt, correctAnswer: 'no' }
      }
    }
    return { question: randomInt, correctAnswer: 'yes' }
  }

  playGame(exercise, generateRound)
}
