import { name, description, version, homepage } from '../../package.json'
import { configKey, compatibility } from '../meta.js'

/**
 * Generates `module.json` meta template.
 */
export function nuxtMetaTemplate() {
  const metaContent = JSON.stringify(
    {
      name,
      version,
      configKey,
      compatibility,
    },
    null,
    2,
  )

  return metaContent
}

/**
 * Generates `shims` for `nuxt.config` auto-completion.
 */
export function nuxtTypesTemplate() {
  const comment = `/**
     * Nuxt Gsap Module
     *
     * ${description}
     *
     * @see [Repository](${homepage})
     */`

  const typesContent = `import { ModuleOptions } from './module'

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

  return typesContent
}
