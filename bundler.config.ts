import { defineConfig } from '@hypernym/bundler'
import { name, version } from './package.json'
import { nuxtMetaTemplate, nuxtTypesTemplate } from './src/utils/templates.js'

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
    {
      template: true,
      output: './dist/module.json',
      content: nuxtMetaTemplate(),
      format: 'json',
    },
    {
      template: true,
      output: './dist/types.d.ts',
      content: nuxtTypesTemplate(),
      format: 'dts',
    },
  ],
})
