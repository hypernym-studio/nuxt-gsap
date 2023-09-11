import { resolve } from 'node:path'
import { writeFile } from 'node:fs/promises'
import { cl, cyan, bold, darken } from 'colorate'
import { configKey, compatibility } from '../meta.js'

/**
 * Generates a `module.json` meta template.
 */
export async function generateModuleMeta(name, version) {
  const root = process.cwd()

  const meta = {
    name,
    version,
    configKey,
    compatibility,
  }

  const metaPath = resolve(root, './dist/module.json')
  const metaTemplate = JSON.stringify(meta, null, 2)

  return await writeFile(metaPath, metaTemplate)
}

/**
 * Generates shims for `nuxt.config` auto-completion.
 */
export async function generateModuleTypes() {
  const root = process.cwd()
  const typesPath = resolve(root, './dist/types.d.ts')

  const comment = `/**
     * Nuxt Gsap Module
     *
     * GSAP module for Nuxt.
     *
     * @see [Repository](https://github.com/hypernym-studio/nuxt-gsap)
     */`

  const typesTemplate = `import { ModuleOptions } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    ${comment}
    ['${configKey}']?: Partial<ModuleOptions>
  }
  interface NuxtOptions {
    ${comment}
    ['${configKey}']?: ModuleOptions
  }
}
declare module 'nuxt/schema' {
  interface NuxtConfig { ['${configKey}']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['${configKey}']?: ModuleOptions }
}

export { ModuleOptions, default } from './module'`

  return await writeFile(typesPath, typesTemplate)
}

/**
 * Prints templates info in the terminal.
 */
export function logModuleTemplates() {
  cl(
    bold(cyan('ROLLI')),
    `Nuxt module templates are generated in the ${cyan("'./dist'")} directory.`,
  )
  cl()
  cl(cyan('> ') + `JSON`, darken('./dist/module.json'))
  cl(cyan('> ') + `DTS `, darken('./dist/types.d.ts'))
  cl()
}
