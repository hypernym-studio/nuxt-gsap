module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    es2022: true
  },

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022
  },

  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  ignorePatterns: [
    '.DS_Store',
    'node_modules',
    'package*',
    '*.log*',
    '.nuxt',
    '.output',
    '.cache',
    '.env',
    'dist',
    'templates'
  ]
}
