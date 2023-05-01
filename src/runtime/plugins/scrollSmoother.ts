import { defineNuxtPlugin, Plugin } from '#app'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import type { PluginScrollSmoother } from '../../types'

const pluginScrollSmoother: Plugin<PluginScrollSmoother> = defineNuxtPlugin(
  nuxtApp => {
    gsap.registerPlugin(ScrollSmoother)
    nuxtApp.provide('ScrollSmoother', ScrollSmoother)
  }
)

export default pluginScrollSmoother
