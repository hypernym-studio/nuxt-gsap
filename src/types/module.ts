import type { NuxtModule } from '@nuxt/schema'
import type { ExtraPlugins, ExtraEases, ClubPlugins } from './options'

export interface ModuleOptions {
  /**
   * Specifies GSAP extra plugins.
   *
   * @default undefined
   *
   * @since 2.0.0
   */
  extraPlugins?: ExtraPlugins
  /**
   * Specifies GSAP extra eases.
   *
   * @default undefined
   *
   * @since 2.0.0
   */
  extraEases?: ExtraEases
  /**
   * Specifies GSAP premium plugins.
   *
   * This is only available to club members as it requires a paid license.
   *
   * Keep in mind that premium plugins must be installed according to the official GSAP guidelines before use.
   *
   * For more information about club plugins, check the official pages.
   *
   * @default undefined
   *
   * @since 2.0.0
   */
  clubPlugins?: ClubPlugins
  /**
   * Provides an easy way to register global effects.
   *
   * Once the effect is registered, it can be accessed directly on the `gsap.effects` object.
   *
   * To avoid possible linting warnings, use `// @ts-ignore` and `// eslint-disable-next-line` comments.
   *
   * @example
   *
   * ```ts
   * {
   *   registerEffects: [
   *     {
   *       name: 'fade',
   *       defaults: {
   *         y: -100,
   *         opacity: 0,
   *         duration: 2
   *       },
   *       // eslint-disable-next-line
   *       // ts-ignore
   *       effect: (targets, config) => {
   *         return gsap.to(targets, {
   *           y: config.y,
   *           opacity: config.opacity,
   *           duration: config.duration
   *         })
   *       }
   *     }
   *   ]
   * }
   * ```
   *
   * @default undefined
   *
   * @since 2.2.0
   */
  registerEffects?: object[]
  /**
   * Provides an easy way to register global eases.
   *
   * Once the ease is registered, it can be accessed directly on the `gsap` animations.
   *
   * @example
   *
   * ```ts
   * {
   *   registerEases: [
   *     {
   *       name: 'customEase',
   *       ease: progress => {
   *         return progress // linear
   *       },
   *     }
   *   ]
   * }
   * ```
   *
   * @default undefined
   *
   * @since 2.2.0
   */
  registerEases?: { name: string; ease: { (progress: number): number } }[]
}

declare const module: NuxtModule<ModuleOptions>

export { module as default }
