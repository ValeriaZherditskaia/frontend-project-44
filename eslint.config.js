import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      '@eslint/js': js,
      '@stylistic': stylistic,
    },
    extends: [js.configs.recommended, stylistic.configs.recommended],
    languageOptions: { globals: globals.node },
  },
])
