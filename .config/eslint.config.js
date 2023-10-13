import { jsConfig, tsConfig, ignores } from '@hypernym/eslint-config'

export default [
  jsConfig,
  tsConfig,
  {
    files: tsConfig.files,
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true },
      ],
    },
  },
  {
    ignores: [...ignores, '**/.nuxt/**/*'],
  },
]
