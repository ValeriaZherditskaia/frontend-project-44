import { playGame } from '../index.js'
import { random } from '../helpers.js'
import { generateProgression } from '../helpers.js'

const exercise = 'What number is missing in the progression?'
const progressionLength = 10

const makeProgressionRound = () => {
  const start = random(0, 5)
  const step = random(1, 6)
  const progression = generateProgression(start, step, progressionLength)
  const hiddenIndex = random(0, progressionLength - 1)
  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')
  return { question, correctAnswer }
}

export const progressionGame = () => {
  playGame(exercise, makeProgressionRound)
}
