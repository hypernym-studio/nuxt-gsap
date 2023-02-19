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

  extends: ['eslint-config-prettier'],

  rules: {
    'no-debugger': 'warn',
    'no-console': 'warn',

    'vue/html-self-closing': 'off',
    'vue/html-indent': 'off',

    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  },

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
    '.code',
    'templates'
  ]
}
