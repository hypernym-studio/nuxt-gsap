import { defineNuxtPlugin, Plugin } from '#app'
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import type { PluginDrawSvg } from '../../types'

const pluginDrawSvg: Plugin<PluginDrawSvg> = defineNuxtPlugin(nuxtApp => {
  gsap.registerPlugin(DrawSVGPlugin)
  nuxtApp.provide('DrawSVGPlugin', DrawSVGPlugin)
})

export default pluginDrawSvg
