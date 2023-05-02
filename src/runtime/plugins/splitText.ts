import { defineNuxtPlugin, Plugin } from '#app'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import type { PluginSplitText } from '../../types'

const pluginSplitText: Plugin<PluginSplitText> = defineNuxtPlugin(nuxtApp => {
  gsap.registerPlugin(SplitText)
  nuxtApp.provide('SplitText', SplitText)
})

export default pluginSplitText
