import { resolve } from 'path'
import pkg from '../package.json'

export default function gsapModule(moduleOptions) {
  const { nuxt, addPlugin } = this
  const options = {
    extraPlugins: {},
    extraEases: {},
    clubPlugins: {},
    registerEffect: [],
    registerEase: [],

    ...nuxt.options.gsap,
    ...moduleOptions
  }

  addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    fileName: 'gsapModule.js',
    options
  })
}

export { pkg as meta }
