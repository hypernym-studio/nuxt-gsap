import { defineConfig } from 'rolli'
import pkg from './package.json' assert { type: 'json' }
import {
  generateModuleMeta,
  generateModuleTypes,
  logModuleTemplates,
} from './src/utils/templates.js'

export default defineConfig({
  tsconfig: 'playground/.nuxt/tsconfig.json',
  exports: false,
  bin: false,
  entries: [
    // Module Core
    {
      input: './src/module.ts',
      output: './dist/module.mjs',
      externals: [/@nuxt/],
      replace: {
        preventAssignment: true,
        __name__: pkg.name,
        __version__: pkg.version,
      },
    },
    {
      input: './src/types/module.ts',
      output: './dist/module.d.ts',
    },
  ],
  hooks: {
    'rolli:end': async () => {
      await generateModuleMeta(pkg.name, pkg.version)
      await generateModuleTypes()
      logModuleTemplates()
    },
  },
})
