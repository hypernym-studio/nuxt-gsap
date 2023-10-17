import { resolve } from 'node:path'
import { writeFile, stat } from 'node:fs/promises'
import { name, version } from '../../package.json'
import { configKey, compatibility } from '../meta.js'
import type { BuildStats } from '@hypernym/bundler'

/**
 * Generates Nuxt templates:
 *
 * - `module.json` meta template
 * - `shims` for `nuxt.config` auto-completion
 */
export async function generateNuxtTemplates(buildStats?: BuildStats) {
  if (!buildStats) return

  const { cwd } = buildStats
  const buildStart = Date.now()
  let buildSize = 0

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

  const comment = `/**
     * Nuxt Gsap Module
     *
     * GSAP module for Nuxt.
     *
     * @see [Repository](https://github.com/hypernym-studio/nuxt-gsap)
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

  const metaPath = './dist/module.json'
  const typesPath = './dist/types.d.ts'

  await writeFile(resolve(cwd, metaPath), metaContent, 'utf-8')
  await writeFile(resolve(cwd, typesPath), typesContent, 'utf-8')

  for (const file of [metaPath, typesPath]) {
    const start = Date.now()
    const stats = await stat(resolve(cwd, file))
    const end = Date.now()
    const time = end - start === 0 ? 1 : end - start

    buildStats.files.push({
      path: file,
      size: stats.size,
      buildTime: time,
      format: file.endsWith('.d.ts') ? 'dts' : 'json',
      logs: [],
    })
    buildSize = buildSize + stats.size
  }

  buildStats.buildTime = buildStats.buildTime + (Date.now() - buildStart)
  buildStats.size = buildStats.size + buildSize
}
