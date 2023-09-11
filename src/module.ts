import { defineNuxtModule, addTemplate, addPluginTemplate } from '@nuxt/kit'
import { serialize } from './utils/serialize'
import { name, version, configKey, compatibility } from './meta'
import type { ModuleOptions } from './types/module'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey,
    compatibility,
  },

  setup(options, nuxt) {
    const {
      extraPlugins: plugins,
      extraEases: eases,
      clubPlugins: club,
      registerEffects: regEffects,
      registerEases: regEases,
    } = options

    const pluginImport: string[] = []
    const pluginRegister: string[] = []
    const pluginType: string[] = []
    const pluginEffect: string[] = []
    const pluginEase: string[] = []
    const pluginClient: string[] = []

    const addPlugin = ({
      name,
      pkgName,
    }: {
      name: string
      pkgName?: string
    }) => {
      pluginImport.push(
        `import { ${name} } from 'gsap/${pkgName ? pkgName : name}';`,
      )
      pluginRegister.push(`${name}`)
      pluginType.push(`${name}: typeof ${name};`)
    }

    // Extra Plugins
    if (plugins?.flip) addPlugin({ name: 'Flip' })
    if (plugins?.scrollTrigger) addPlugin({ name: 'ScrollTrigger' })
    if (plugins?.observer) addPlugin({ name: 'Observer' })
    if (plugins?.scrollTo) addPlugin({ name: 'ScrollToPlugin' })
    if (plugins?.draggable) addPlugin({ name: 'Draggable' })
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
    if (club?.scrollSmoother) addPlugin({ name: 'ScrollSmoother' })
    if (club?.gsDevTools) addPlugin({ name: 'GSDevTools' })
    if (club?.inertia) addPlugin({ name: 'InertiaPlugin' })
    if (club?.morphSvg) addPlugin({ name: 'MorphSVGPlugin' })
    if (club?.motionPathHelper) addPlugin({ name: 'MotionPathHelper' })
    if (club?.physics2d) addPlugin({ name: 'Physics2DPlugin' })
    if (club?.physicsProps) addPlugin({ name: 'PhysicsPropsPlugin' })
    if (club?.scrambleText) addPlugin({ name: 'ScrambleTextPlugin' })
    if (club?.splitText) addPlugin({ name: 'SplitText' })
    if (club?.customBounce) addPlugin({ name: 'CustomBounce' })
    if (club?.customWiggle) addPlugin({ name: 'CustomWiggle' })

    // Global Effects
    if (regEffects)
      regEffects.forEach((effect) =>
        pluginEffect.push(`gsap.registerEffect(${serialize(effect)});`),
      )

    // Global Eases
    if (regEases)
      regEases.forEach((ease) =>
        pluginEase.push(
          `gsap.registerEase(${serialize(ease.name)}, ${serialize(
            ease.ease,
          )});`,
        ),
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
        `}`,
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
          `export default plugin;`,
        ].join('\n'),
    })

    addPluginTemplate({
      filename: 'gsapPlugin.mjs',
      write: nuxt.options.dev,
      getContents: () =>
        [
          `import { defineNuxtPlugin } from '#imports';`,
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
          `export default plugin;`,
        ].join('\n'),
    })
  },
})
