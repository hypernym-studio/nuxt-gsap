module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    requireConfigFile: false
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
  }
}
