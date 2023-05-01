import { defineNuxtPlugin, Plugin } from '#app'
import { gsap } from 'gsap'
import { GSDevTools } from 'gsap/GSDevTools'
import type { PluginGsDevTools } from '../../types'

const pluginGsDevTools: Plugin<PluginGsDevTools> = defineNuxtPlugin(nuxtApp => {
  gsap.registerPlugin(GSDevTools)
  nuxtApp.provide('GSDevTools', GSDevTools)
})

export default pluginGsDevTools
