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
  Object.keys(options.extraEases).length ||
  Object.keys(options.clubPlugins).length
  ) { %>
    if (process.client) {
      <% if (options.extraPlugins.cssRule) { %>
        const { CSSRulePlugin } = require('gsap/CSSRulePlugin')
        Vue.prototype.$CSSRulePlugin = CSSRulePlugin
        gsap.registerPlugin(CSSRulePlugin)
      <% } %>

      <% if (options.extraPlugins.draggable) { %>
        const { Draggable } = require('gsap/Draggable')
        Vue.prototype.$Draggable = Draggable
        gsap.registerPlugin(Draggable)
      <% } %>

      <% if (options.extraPlugins.easel) { %>
        const { EaselPlugin } = require('gsap/EaselPlugin')
        Vue.prototype.$EaselPlugin = EaselPlugin
        gsap.registerPlugin(EaselPlugin)
      <% } %>

      <% if (options.extraPlugins.motionPath) { %>
        const { MotionPathPlugin } = require('gsap/MotionPathPlugin')
        Vue.prototype.$MotionPathPlugin = MotionPathPlugin
        gsap.registerPlugin(MotionPathPlugin)
      <% } %>

      <% if (options.extraPlugins.pixi) { %>
        const { PixiPlugin } = require('gsap/PixiPlugin')
        Vue.prototype.$PixiPlugin = PixiPlugin
        gsap.registerPlugin(PixiPlugin)
      <% } %>

      <% if (options.extraPlugins.text) { %>
        const { TextPlugin } = require('gsap/TextPlugin')
        Vue.prototype.$TextPlugin = TextPlugin
        gsap.registerPlugin(TextPlugin)
      <% } %>

      <% if (options.extraPlugins.scrollTo) { %>
        const { ScrollToPlugin } = require('gsap/ScrollToPlugin')
        Vue.prototype.$ScrollToPlugin = ScrollToPlugin
        gsap.registerPlugin(ScrollToPlugin)
      <% } %>

      <% if (options.extraPlugins.scrollTrigger) { %>
        const { ScrollTrigger } = require('gsap/ScrollTrigger')
        Vue.prototype.$ScrollTrigger = ScrollTrigger
        gsap.registerPlugin(ScrollTrigger)
      <% } %>

      <% if (options.extraEases.expoScaleEase) { %>
        const { ExpoScaleEase } = require('gsap/EasePack')
        Vue.prototype.$ExpoScaleEase = ExpoScaleEase
        gsap.registerPlugin(ExpoScaleEase)
      <% } %>
      
      <% if (options.extraEases.roughEase) { %>
        const { RoughEase } = require('gsap/EasePack')
        Vue.prototype.$RoughEase = RoughEase
        gsap.registerPlugin(RoughEase)
      <% } %>

      <% if (options.extraEases.slowMo) { %>
        const { SlowMo } = require('gsap/EasePack')
        Vue.prototype.$SlowMo = SlowMo
        gsap.registerPlugin(SlowMo)
      <% } %>

      // Club Plugins

      <% if (options.clubPlugins.customEase) { %>
        const { CustomEase } = require('gsap/CustomEase')
        Vue.prototype.$CustomEase = CustomEase
        gsap.registerPlugin(CustomEase)
      <% } %>

      <% if (options.clubPlugins.customBounce) { %>
        const { CustomBounce } = require('gsap/CustomBounce')
        Vue.prototype.$CustomBounce = CustomBounce
        gsap.registerPlugin(CustomBounce)
      <% } %>

      <% if (options.clubPlugins.customWiggle) { %>
        const { CustomWiggle } = require('gsap/CustomWiggle')
        Vue.prototype.$CustomWiggle = CustomWiggle
        gsap.registerPlugin(CustomWiggle)
      <% } %>

      <% if (options.clubPlugins.drawSVG) { %>
        const { DrawSVGPlugin } = require('gsap/DrawSVGPlugin')
        Vue.prototype.$DrawSVGPlugin = DrawSVGPlugin
        gsap.registerPlugin(DrawSVGPlugin)
      <% } %>

      <% if (options.clubPlugins.flip) { %>
        const { Flip } = require('gsap/Flip')
        Vue.prototype.$Flip = Flip
        gsap.registerPlugin(Flip)
      <% } %>

      <% if (options.clubPlugins.gsDevTools) { %>
        const { GSDevTools } = require('gsap/GSDevTools')
        Vue.prototype.$GSDevTools = GSDevTools
        gsap.registerPlugin(GSDevTools)
      <% } %>

      <% if (options.clubPlugins.inertia) { %>
        const { InertiaPlugin } = require('gsap/InertiaPlugin')
        Vue.prototype.$InertiaPlugin = InertiaPlugin
        gsap.registerPlugin(InertiaPlugin)
      <% } %>

      <% if (options.clubPlugins.morphSVG) { %>
        const { MorphSVGPlugin } = require('gsap/MorphSVGPlugin')
        Vue.prototype.$MorphSVGPlugin = MorphSVGPlugin
        gsap.registerPlugin(MorphSVGPlugin)
      <% } %>

      <% if (options.clubPlugins.motionPathHelper) { %>
        const { MotionPathHelper } = require('gsap/MotionPathHelper')
        Vue.prototype.$MotionPathHelper = MotionPathHelper
        gsap.registerPlugin(MotionPathHelper)
      <% } %>

      <% if (options.clubPlugins.physics2D) { %>
        const { Physics2DPlugin } = require('gsap/Physics2DPlugin')
        Vue.prototype.$Physics2DPlugin = Physics2DPlugin
        gsap.registerPlugin(Physics2DPlugin)
      <% } %>

      <% if (options.clubPlugins.physicsProps) { %>
        const { PhysicsPropsPlugin } = require('gsap/PhysicsPropsPlugin')
        Vue.prototype.$PhysicsPropsPlugin = PhysicsPropsPlugin
        gsap.registerPlugin(PhysicsPropsPlugin)
      <% } %>

      <% if (options.clubPlugins.scrambleText) { %>
        const { ScrambleTextPlugin } = require('gsap/ScrambleTextPlugin')
        Vue.prototype.$ScrambleTextPlugin = ScrambleTextPlugin
        gsap.registerPlugin(ScrambleTextPlugin)
      <% } %>

      <% if (options.clubPlugins.splitText) { %>
        const { SplitText } = require('gsap/SplitText')
        Vue.prototype.$SplitText = SplitText
        gsap.registerPlugin(SplitText)
      <% } %>
    }
<% } %>
