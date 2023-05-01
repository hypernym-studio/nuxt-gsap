import { defineNuxtPlugin, Plugin } from '#app'
import { gsap } from 'gsap'
import { CustomBounce } from 'gsap/CustomBounce'
import type { PluginCustomBounce } from '../../types'

const pluginCustomBounce: Plugin<PluginCustomBounce> = defineNuxtPlugin(
  nuxtApp => {
    gsap.registerPlugin(CustomBounce)
    nuxtApp.provide('CustomBounce', CustomBounce)
  }
)

export default pluginCustomBounce
