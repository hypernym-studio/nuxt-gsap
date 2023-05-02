import { defineNuxtPlugin, Plugin } from '#app'
import { gsap } from 'gsap'
import { Physics2DPlugin } from 'gsap/Physics2DPlugin'
import type { PluginPhysics2d } from '../../types'

const pluginPhysics2d: Plugin<PluginPhysics2d> = defineNuxtPlugin(nuxtApp => {
  gsap.registerPlugin(Physics2DPlugin)
  nuxtApp.provide('Physics2DPlugin', Physics2DPlugin)
})

export default pluginPhysics2d
