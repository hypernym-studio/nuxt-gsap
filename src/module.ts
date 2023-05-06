import { defineNuxtModule, addTemplate, addPluginTemplate } from '@nuxt/kit'
import { stringify } from './utils'
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
    const {
      extraPlugins: plugins,
      extraEases: eases,
      clubPlugins: club,
      registerEffects: regEffects,
      registerEases: regEases
    } = options

    const pluginImport: string[] = []
    const pluginRegister: string[] = []
    const pluginType: string[] = []
    const pluginEffect: string[] = []
    const pluginEase: string[] = []
    const pluginClient: string[] = []

    const addPlugin = ({
      name,
      type_of = true,
      pkgName
    }: {
      name: string
      type_of?: boolean
      pkgName?: string
    }) => {
      pluginImport.push(
        `import { ${name} } from 'gsap/${pkgName ? pkgName : name}';`
      )
      pluginRegister.push(`${name}`)
      pluginType.push(`${name}: ${type_of ? `typeof ${name}` : name};`)
    }

    // Extra Plugins
    if (plugins?.flip) addPlugin({ name: 'Flip', type_of: false })
    if (plugins?.scrollTrigger)
      addPlugin({ name: 'ScrollTrigger', type_of: false })
    if (plugins?.observer) addPlugin({ name: 'Observer', type_of: false })
    if (plugins?.scrollTo) addPlugin({ name: 'ScrollToPlugin' })
    if (plugins?.draggable) addPlugin({ name: 'Draggable', type_of: false })
    if (plugins?.easel) addPlugin({ name: 'EaselPlugin' })
    if (plugins?.motionPath) addPlugin({ name: 'MotionPathPlugin' })
    if (plugins?.pixi) addPlugin({ name: 'PixiPlugin' })
    if (plugins?.text) addPlugin({ name: 'TextPlugin' })

    // Extra Eases
    if (eases?.expoScale)
      addPlugin({ name: 'ExpoScaleEase', pkgName: 'EasePack' })
    if (eases?.rough) addPlugin({ name: 'RoughEase', pkgName: 'EasePack' })
    if (eases?.slowMo) addPlugin({ name: 'SlowMo', pkgName: 'EasePack' })
    if (eases?.custom) addPlugin({ name: 'CustomEase' })

    // Club Plugins
    if (club?.drawSvg) addPlugin({ name: 'DrawSVGPlugin' })
    if (club?.scrollSmoother)
      addPlugin({ name: 'ScrollSmoother', type_of: false })
    if (club?.gsDevTools) addPlugin({ name: 'GSDevTools', type_of: false })
    if (club?.inertia) addPlugin({ name: 'InertiaPlugin' })
    if (club?.morphSvg) addPlugin({ name: 'MorphSVGPlugin' })
    if (club?.motionPathHelper)
      addPlugin({ name: 'MotionPathHelper', type_of: false })
    if (club?.physics2d) addPlugin({ name: 'Physics2DPlugin' })
    if (club?.physicsProps) addPlugin({ name: 'PhysicsPropsPlugin' })
    if (club?.scrambleText) addPlugin({ name: 'ScrambleTextPlugin' })
    if (club?.splitText) addPlugin({ name: 'SplitText', type_of: false })
    if (club?.customBounce) addPlugin({ name: 'CustomBounce' })
    if (club?.customWiggle) addPlugin({ name: 'CustomWiggle' })

    // Global Effects
    if (regEffects)
      regEffects.forEach(effect =>
        pluginEffect.push(`gsap.registerEffect(${stringify(effect)});`)
      )

    // Global Eases
    if (regEases)
      regEases.forEach(ease =>
        pluginEase.push(
          `gsap.registerEase(${stringify(ease.name)}, ${stringify(ease.ease)});`
        )
      )

    // Client mode
    if (plugins || eases || club || regEffects || regEases) {
      const registerPlugin = pluginRegister.length
        ? `gsap.registerPlugin(${pluginRegister.join(',')});`
        : ''
      const registerEffect = pluginEffect.length ? pluginEffect.join('\n') : ''
      const registerEase = pluginEase.length ? pluginEase.join('\n') : ''

      pluginClient.push(
        `if(process.client) {`,
        `  ${registerPlugin}`,
        `  ${registerEffect}`,
        `  ${registerEase}`,
        `}`
      )
    }

    addTemplate({
      filename: 'gsapPlugin.d.ts',
      write: nuxt.options.dev,
      getContents: () =>
        [
          `import { Plugin } from '#app';`,
          `import { gsap } from 'gsap';`,
          `${pluginImport.join('\n')}`,
          `declare const plugin: Plugin<{`,
          `  gsap: typeof gsap;`,
          `  ${pluginType.join('\n')}`,
          `}>;`,
          `export default plugin;`
        ].join('\n')
    })

    addPluginTemplate({
      filename: 'gsapPlugin.mjs',
      write: nuxt.options.dev,
      getContents: () =>
        [
          `import { defineNuxtPlugin } from '#app';`,
          `import { gsap } from 'gsap';`,
          `${pluginImport.join('\n')}`,
          `const plugin = defineNuxtPlugin(() => {`,
          `  ${pluginClient.join('\n')}`,
          `  return {`,
          `    provide: {`,
          `      gsap,`,
          `      ${pluginRegister.join(',\n')}`,
          `    }`,
          `  }`,
          `})`,
          `export default plugin;`
        ].join('\n')
    })
  }
})
