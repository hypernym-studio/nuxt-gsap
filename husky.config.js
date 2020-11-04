module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'npm run lint:eslint',
    'pre-push': 'npm run lint:eslint'
  }
}
