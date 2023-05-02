import { defineNuxtConfig } from 'nuxt/config'
import Module from '../src/module'

export default defineNuxtConfig({
  telemetry: false,

  modules: [Module],

  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  }
})
