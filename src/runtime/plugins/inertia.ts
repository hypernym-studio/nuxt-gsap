import { defineNuxtPlugin, Plugin } from '#app'
import { gsap } from 'gsap'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import type { PluginInertia } from '../../types'

const pluginInertia: Plugin<PluginInertia> = defineNuxtPlugin(nuxtApp => {
  gsap.registerPlugin(InertiaPlugin)
  nuxtApp.provide('InertiaPlugin', InertiaPlugin)
})

export default pluginInertia
