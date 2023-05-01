import { defineNuxtPlugin, Plugin } from '#app'
import { gsap } from 'gsap'
import { PhysicsPropsPlugin } from 'gsap/PhysicsPropsPlugin'
import type { PluginPhysicsProps } from '../../types'

const pluginPhysicsProps: Plugin<PluginPhysicsProps> = defineNuxtPlugin(
  nuxtApp => {
    gsap.registerPlugin(PhysicsPropsPlugin)
    nuxtApp.provide('PhysicsPropsPlugin', PhysicsPropsPlugin)
  }
)

export default pluginPhysicsProps
