import Vue from 'vue'
import { gsap } from 'gsap'

Vue.directive('gsap', (el, binding) => {
  const options = { ...binding.value }
  const modifiers = binding.modifiers

  if (modifiers.set) {
    gsap.set(el, options)
  }

  if (modifiers.to) {
    gsap.to(el, options)
  }

  if (modifiers.from) {
    gsap.from(el, options)
  }

  if (modifiers.fromTo) {
    gsap.fromTo(el, { ...binding.value[0] }, { ...binding.value[1] })
  }
})

Vue.prototype.$gsap = gsap

<% if (
  Object.keys(options.extraPlugins).length ||
  Object.keys(options.extraEases).length
  ) { %>
    if (process.client) {
      <% if (options.extraPlugins.cssRule) { %>
        const { CSSRulePlugin } = require('gsap/CSSRulePlugin')
        Vue.prototype.$CSSRulePlugin = CSSRulePlugin
      <% } %>

      <% if (options.extraPlugins.draggable) { %>
        const { Draggable } = require('gsap/Draggable')
        Vue.prototype.$Draggable = Draggable
      <% } %>

      <% if (options.extraPlugins.easel) { %>
        const { EaselPlugin } = require('gsap/EaselPlugin')
        Vue.prototype.$EaselPlugin = EaselPlugin
      <% } %>

      <% if (options.extraPlugins.motionPath) { %>
        const { MotionPathPlugin } = require('gsap/MotionPathPlugin')
        Vue.prototype.$MotionPathPlugin = MotionPathPlugin
      <% } %>

      <% if (options.extraPlugins.pixi) { %>
        const { PixiPlugin } = require('gsap/PixiPlugin')
        Vue.prototype.$PixiPlugin = PixiPlugin
      <% } %>

      <% if (options.extraPlugins.text) { %>
        const { TextPlugin } = require('gsap/TextPlugin')
        Vue.prototype.$TextPlugin = TextPlugin
      <% } %>

      <% if (options.extraPlugins.scrollTo) { %>
        const { ScrollToPlugin } = require('gsap/ScrollToPlugin')
        Vue.prototype.$ScrollToPlugin = ScrollToPlugin
      <% } %>

      <% if (options.extraPlugins.scrollTrigger) { %>
        const { ScrollTrigger } = require('gsap/ScrollTrigger')
        Vue.prototype.$ScrollTrigger = ScrollTrigger
      <% } %>

      <% if (options.extraEases.expoScaleEase) { %>
        const { ExpoScaleEase } = require('gsap/EasePack')
        Vue.prototype.$ExpoScaleEase = ExpoScaleEase
      <% } %>
      
      <% if (options.extraEases.roughEase) { %>
        const { RoughEase } = require('gsap/EasePack')
        Vue.prototype.$RoughEase = RoughEase
      <% } %>

      <% if (options.extraEases.slowMo) { %>
        const { SlowMo } = require('gsap/EasePack')
        Vue.prototype.$SlowMo = SlowMo
      <% } %>
    }
<% } %>
