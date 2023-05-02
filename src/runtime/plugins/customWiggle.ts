import { defineNuxtPlugin, Plugin } from '#app'
import { gsap } from 'gsap'
import { CustomWiggle } from 'gsap/CustomWiggle'
import type { PluginCustomWiggle } from '../../types'

const pluginCustomWiggle: Plugin<PluginCustomWiggle> = defineNuxtPlugin(
  nuxtApp => {
    gsap.registerPlugin(CustomWiggle)
    nuxtApp.provide('CustomWiggle', CustomWiggle)
  }
)

export default pluginCustomWiggle
