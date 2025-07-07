// Генерация случайного числа
export const random = (minNum = 0, maxNum = 100) =>
  Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

// Функция выполняет арифметическую операцию
export const calculate = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
  }
}

// Функция для проверки, является ли число  чётным
export const isEven = (num) => num % 2 === 0

// Функция вычисляет наибольший общий делитель
export const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

// Функция для проверки, является ли число простым
export const checkPrime = (num) => {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }
  return true
}

// Генерация арифметической прогрессии
export const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}
