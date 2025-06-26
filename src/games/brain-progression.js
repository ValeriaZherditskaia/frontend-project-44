import { playGame } from '../index.js'
import { random } from '../index.js'

export const progressionGame = () => {
  const exercise = 'What number is missing in the progression?'

  const generateRound = () => {
    const generateProgression = (start, step, length) => {
      const progression = []
      for (let i = 0; i < length; i++) {
        progression.push(start + i * step)
      }
      return progression
    }

    const start = random(0, 5)
    const step = random(1, 6)
    const lengthProgression = 10

    const progression = generateProgression(start, step, lengthProgression)

    const randomIndexArr = random(0, lengthProgression - 1)
    const correctAnswer = String(progression[randomIndexArr])
    progression[randomIndexArr] = '..'
    const question = progression.join(' ')

    return { question, correctAnswer }
  }

  playGame(exercise, generateRound)
}
