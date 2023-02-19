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

<% if (options.registerEffect.length) { %>
  const effects = <%= serialize(options.registerEffect) %>

  effects.forEach(effect => {
    gsap.registerEffect(effect)
  })
<% } %>

<% if (options.registerEase.length) { %>
  const eases = <%= serialize(options.registerEase) %>

  eases.forEach(_ease => {
    gsap.registerEase(_ease.name, _ease.ease)
  })
<% } %>

export default ({ app }, inject) => {
  inject('gsap', gsap)

  <% if (
    Object.keys(options.extraPlugins).length ||
    Object.keys(options.extraEases).length ||
    Object.keys(options.clubPlugins).length
    ) { %>
      if (process.client) {
        <% if (options.extraPlugins.flip) { %>
          const { Flip } = require('gsap/Flip')
          inject('Flip', Flip)
          gsap.registerPlugin(Flip)
        <% } %>

        <% if (options.extraPlugins.scrollTrigger) { %>
          const { ScrollTrigger } = require('gsap/ScrollTrigger')
          inject('ScrollTrigger', ScrollTrigger)
          gsap.registerPlugin(ScrollTrigger)
        <% } %>

        <% if (options.extraPlugins.observer) { %>
          const { Observer } = require('gsap/Observer')
          inject('Observer', Observer)
          gsap.registerPlugin(Observer)
        <% } %>

        <% if (options.extraPlugins.scrollTo) { %>
          const { ScrollToPlugin } = require('gsap/ScrollToPlugin')
          inject('ScrollToPlugin', ScrollToPlugin)
          gsap.registerPlugin(ScrollToPlugin)
        <% } %>

        <% if (options.extraPlugins.draggable) { %>
          const { Draggable } = require('gsap/Draggable')
          inject('Draggable', Draggable)
          gsap.registerPlugin(Draggable)
        <% } %>

        <% if (options.extraPlugins.easel) { %>
          const { EaselPlugin } = require('gsap/EaselPlugin')
          inject('EaselPlugin', EaselPlugin)
          gsap.registerPlugin(EaselPlugin)
        <% } %>

        <% if (options.extraPlugins.motionPath) { %>
          const { MotionPathPlugin } = require('gsap/MotionPathPlugin')
          inject('MotionPathPlugin', MotionPathPlugin)
          gsap.registerPlugin(MotionPathPlugin)
        <% } %>

        <% if (options.extraPlugins.pixi) { %>
          const { PixiPlugin } = require('gsap/PixiPlugin')
          inject('PixiPlugin', PixiPlugin)
          gsap.registerPlugin(PixiPlugin)
        <% } %>

        <% if (options.extraPlugins.text) { %>
          const { TextPlugin } = require('gsap/TextPlugin')
          inject('TextPlugin', TextPlugin)
          gsap.registerPlugin(TextPlugin)
        <% } %>

        <% if (options.extraEases.expoScaleEase) { %>
          const { ExpoScaleEase } = require('gsap/EasePack')
          inject('ExpoScaleEase', ExpoScaleEase)
          gsap.registerPlugin(ExpoScaleEase)
        <% } %>

        <% if (options.extraEases.roughEase) { %>
          const { RoughEase } = require('gsap/EasePack')
          inject('RoughEase', RoughEase)
          gsap.registerPlugin(RoughEase)
        <% } %>

        <% if (options.extraEases.slowMo) { %>
          const { SlowMo } = require('gsap/EasePack')
          inject('SlowMo', SlowMo)
          gsap.registerPlugin(SlowMo)
        <% } %>

        <% if (options.extraEases.customEase) { %>
          const { CustomEase } = require('gsap/CustomEase')
          inject('CustomEase', CustomEase)
          gsap.registerPlugin(CustomEase)
        <% } %>

        <% if (options.clubPlugins.drawSVG) { %>
          const { DrawSVGPlugin } = require('gsap/DrawSVGPlugin')
          inject('DrawSVGPlugin', DrawSVGPlugin)
          gsap.registerPlugin(DrawSVGPlugin)
        <% } %>

        <% if (options.clubPlugins.scrollSmoother) { %>
          const { ScrollSmoother } = require('gsap/ScrollSmoother')
          inject('ScrollSmoother', ScrollSmoother)
          gsap.registerPlugin(ScrollSmoother)
        <% } %>

        <% if (options.clubPlugins.gsDevTools) { %>
          const { GSDevTools } = require('gsap/GSDevTools')
          inject('GSDevTools', GSDevTools)
          gsap.registerPlugin(GSDevTools)
        <% } %>

        <% if (options.clubPlugins.inertia) { %>
          const { InertiaPlugin } = require('gsap/InertiaPlugin')
          inject('InertiaPlugin', InertiaPlugin)
          gsap.registerPlugin(InertiaPlugin)
        <% } %>

        <% if (options.clubPlugins.morphSVG) { %>
          const { MorphSVGPlugin } = require('gsap/MorphSVGPlugin')
          inject('MorphSVGPlugin', MorphSVGPlugin)
          gsap.registerPlugin(MorphSVGPlugin)
        <% } %>

        <% if (options.clubPlugins.motionPathHelper) { %>
          const { MotionPathHelper } = require('gsap/MotionPathHelper')
          inject('MotionPathHelper', MotionPathHelper)
          gsap.registerPlugin(MotionPathHelper)
        <% } %>

        <% if (options.clubPlugins.physics2D) { %>
          const { Physics2DPlugin } = require('gsap/Physics2DPlugin')
          inject('Physics2DPlugin', Physics2DPlugin)
          gsap.registerPlugin(Physics2DPlugin)
        <% } %>

        <% if (options.clubPlugins.physicsProps) { %>
          const { PhysicsPropsPlugin } = require('gsap/PhysicsPropsPlugin')
          inject('PhysicsPropsPlugin', PhysicsPropsPlugin)
          gsap.registerPlugin(PhysicsPropsPlugin)
        <% } %>

        <% if (options.clubPlugins.scrambleText) { %>
          const { ScrambleTextPlugin } = require('gsap/ScrambleTextPlugin')
          inject('ScrambleTextPlugin', ScrambleTextPlugin)
          gsap.registerPlugin(ScrambleTextPlugin)
        <% } %>

        <% if (options.clubPlugins.splitText) { %>
          const { SplitText } = require('gsap/SplitText')
          inject('SplitText', SplitText)
          gsap.registerPlugin(SplitText)
        <% } %>

        <% if (options.clubPlugins.customBounce) { %>
          const { CustomBounce } = require('gsap/CustomBounce')
          inject('CustomBounce', CustomBounce)
          gsap.registerPlugin(CustomBounce)
        <% } %>

        <% if (options.clubPlugins.customWiggle) { %>
          const { CustomWiggle } = require('gsap/CustomWiggle')
          inject('CustomWiggle', CustomWiggle)
          gsap.registerPlugin(CustomWiggle)
        <% } %>
      }
  <% } %>
}
