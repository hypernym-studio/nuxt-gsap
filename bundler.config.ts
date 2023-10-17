import { defineConfig } from '@hypernym/bundler'
import { name, version } from './package.json'
import { generateNuxtTemplates } from './src/utils/templates.js'

export default defineConfig({
  entries: [
    {
      input: './src/module.ts',
      externals: [/^@nuxt/],
      plugins: {
        replace: {
          preventAssignment: true,
          __name__: name,
          __version__: version,
        },
      },
    },
    {
      types: './src/types/module.ts',
      output: './dist/module.d.ts',
    },
  ],
  hooks: {
    'build:end': async (options, buildStats) => {
      await generateNuxtTemplates(buildStats)
    },
  },
})
