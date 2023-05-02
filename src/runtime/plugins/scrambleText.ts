import { defineNuxtPlugin, Plugin } from '#app'
import { gsap } from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import type { PluginScrambleText } from '../../types'

const pluginScrambleText: Plugin<PluginScrambleText> = defineNuxtPlugin(
  nuxtApp => {
    gsap.registerPlugin(ScrambleTextPlugin)
    nuxtApp.provide('ScrambleTextPlugin', ScrambleTextPlugin)
  }
)

export default pluginScrambleText
