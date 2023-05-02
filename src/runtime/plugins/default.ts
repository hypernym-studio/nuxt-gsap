import { defineNuxtPlugin, Plugin, useRuntimeConfig } from '#app'
import { gsap } from 'gsap'
import { configKey } from '../../../package.json'
import type { ModuleOptions, PluginDefault } from '../../types'

const pluginDefault: Plugin<PluginDefault> = defineNuxtPlugin(async nuxtApp => {
  const config = useRuntimeConfig().public[configKey] as ModuleOptions
  const { extraPlugins, extraEases } = config
  const { registerPlugin } = gsap
  const { provide } = nuxtApp

  provide('gsap', gsap)

  if (process.client) {
    if (extraPlugins?.flip) {
      const { Flip } = await import('gsap/Flip')
      registerPlugin(Flip)
      provide('Flip', Flip)
    }

    if (extraPlugins?.scrollTrigger) {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      registerPlugin(ScrollTrigger)
      provide('ScrollTrigger', ScrollTrigger)
    }

    if (extraPlugins?.observer) {
      const { Observer } = await import('gsap/Observer')
      registerPlugin(Observer)
      provide('Observer', Observer)
    }

    if (extraPlugins?.scrollTo) {
      const { ScrollToPlugin } = await import('gsap/ScrollToPlugin')
      registerPlugin(ScrollToPlugin)
      provide('ScrollToPlugin', ScrollToPlugin)
    }

    if (extraPlugins?.draggable) {
      const { Draggable } = await import('gsap/Draggable')
      registerPlugin(Draggable)
      provide('Draggable', Draggable)
    }

    if (extraPlugins?.easel) {
      const { EaselPlugin } = await import('gsap/EaselPlugin')
      registerPlugin(EaselPlugin)
      provide('EaselPlugin', EaselPlugin)
    }

    if (extraPlugins?.motionPath) {
      const { MotionPathPlugin } = await import('gsap/MotionPathPlugin')
      registerPlugin(MotionPathPlugin)
      provide('MotionPathPlugin', MotionPathPlugin)
    }

    if (extraPlugins?.pixi) {
      const { PixiPlugin } = await import('gsap/PixiPlugin')
      registerPlugin(PixiPlugin)
      provide('PixiPlugin', PixiPlugin)
    }

    if (extraPlugins?.text) {
      const { TextPlugin } = await import('gsap/TextPlugin')
      registerPlugin(TextPlugin)
      provide('TextPlugin', TextPlugin)
    }

    if (extraEases?.expoScale) {
      const { ExpoScaleEase } = await import('gsap/EasePack')
      registerPlugin(ExpoScaleEase)
      provide('ExpoScaleEase', ExpoScaleEase)
    }

    if (extraEases?.rough) {
      const { RoughEase } = await import('gsap/EasePack')
      registerPlugin(RoughEase)
      provide('RoughEase', RoughEase)
    }

    if (extraEases?.slowMo) {
      const { SlowMo } = await import('gsap/EasePack')
      registerPlugin(SlowMo)
      provide('SlowMo', SlowMo)
    }

    if (extraEases?.custom) {
      const { CustomEase } = await import('gsap/CustomEase')
      registerPlugin(CustomEase)
      provide('CustomEase', CustomEase)
    }
  }
})

export default pluginDefault
