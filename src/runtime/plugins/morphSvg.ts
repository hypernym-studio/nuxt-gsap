import { defineNuxtPlugin, Plugin } from '#app'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import type { PluginMorphSvg } from '../../types'

const pluginMorphSvg: Plugin<PluginMorphSvg> = defineNuxtPlugin(nuxtApp => {
  gsap.registerPlugin(MorphSVGPlugin)
  nuxtApp.provide('MorphSVGPlugin', MorphSVGPlugin)
})

export default pluginMorphSvg
