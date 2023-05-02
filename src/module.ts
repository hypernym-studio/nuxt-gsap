import {
  defineNuxtModule,
  createResolver,
  addPlugin as nuxtPlugin
} from '@nuxt/kit'
import { defu } from 'defu'
import { name, version, configKey } from '../package.json'
import type { ModuleOptions } from './types'

export * from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey,
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },

  setup(options, nuxt) {
    const { extraPlugins, extraEases, clubPlugins } = options
    const moduleRuntime = nuxt.options.runtimeConfig.public[
      configKey
    ] as ModuleOptions

    const { resolve } = createResolver(import.meta.url)
    nuxt.options.build.transpile.push(resolve('./runtime'))

    const addPlugin = (
      name: string,
      mode: 'all' | 'server' | 'client' = 'all'
    ) => nuxtPlugin({ src: resolve(`./runtime/plugins/${name}`), mode })

    nuxt.options.runtimeConfig.public[configKey] = defu(moduleRuntime, {
      extraPlugins,
      extraEases
    })

    if (clubPlugins?.drawSvg) addPlugin('drawSvg', 'client')
    if (clubPlugins?.scrollSmoother) addPlugin('scrollSmoother', 'client')
    if (clubPlugins?.gsDevTools) addPlugin('gsDevTools', 'client')
    if (clubPlugins?.inertia) addPlugin('inertia', 'client')
    if (clubPlugins?.morphSvg) addPlugin('morphSvg', 'client')
    if (clubPlugins?.motionPathHelper) addPlugin('motionPathHelper', 'client')
    if (clubPlugins?.physics2d) addPlugin('physics2d', 'client')
    if (clubPlugins?.physicsProps) addPlugin('physicsProps', 'client')
    if (clubPlugins?.scrambleText) addPlugin('scrambleText', 'client')
    if (clubPlugins?.splitText) addPlugin('splitText', 'client')
    if (clubPlugins?.customBounce) addPlugin('customBounce', 'client')
    if (clubPlugins?.customWiggle) addPlugin('customWiggle', 'client')

    addPlugin('default')
  }
})
