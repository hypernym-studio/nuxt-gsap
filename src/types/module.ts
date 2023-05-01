import type { ExtraPlugins, ExtraEases, ClubPlugins } from './options'

/**
 * Module Options
 *
 * @since 2.0.0
 */
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
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    /**
     * Nuxt Gsap Module
     *
     * GSAP module for Nuxt.
     *
     * @see [Repository](https://github.com/hypernym-studio/nuxt-gsap)
     */
    gsap?: ModuleOptions
  }
  interface NuxtOptions {
    /**
     * Nuxt Gsap Module
     *
     * GSAP module for Nuxt.
     *
     * @see [Repository](https://github.com/hypernym-studio/nuxt-gsap)
     */
    gsap?: ModuleOptions
  }
}
