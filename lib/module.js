import { resolve } from 'path'
import pkg from '../package.json'

export default function (moduleOptions) {
  const options = {
    extraPlugins: {},
    extraEases: {},

    ...this.options.gsap,
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'gsapModule.js',
    options
  })
}

export { pkg as meta }
