import { name, version } from './package.json'
import {
  generateModuleMeta,
  generateModuleTypes,
} from './src/utils/templates.js'

export default {
  entries: [
    {
      input: './src/module.ts',
      output: './dist/module.mjs',
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
    'build:done': async () => {
      await generateModuleMeta(name, version)
      await generateModuleTypes()
    },
  },
}
