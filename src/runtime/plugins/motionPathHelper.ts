import { defineNuxtPlugin, Plugin } from '#app'
import { gsap } from 'gsap'
import { MotionPathHelper } from 'gsap/MotionPathHelper'
import type { PluginMotionPathHelper } from '../../types'

const pluginMotionPathHelper: Plugin<PluginMotionPathHelper> = defineNuxtPlugin(
  nuxtApp => {
    gsap.registerPlugin(MotionPathHelper)
    nuxtApp.provide('MotionPathHelper', MotionPathHelper)
  }
)

export default pluginMotionPathHelper
