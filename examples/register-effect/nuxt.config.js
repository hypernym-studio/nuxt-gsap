export default {
  buildModules: ['nuxt-gsap-module'],

  gsap: {
    registerEffect: [
      {
        name: 'fadeOut',
        defaults: {
          y: -100,
          opacity: 0,
          duration: 2
        },
        effect: (targets, config) => {
          // If you use eslint, add comments to disable and avoid errors for no-undef 'gsap'
          // eslint-disable-next-line no-undef
          return gsap.to(targets, {
            y: config.y,
            opacity: config.opacity,
            duration: config.duration
          })
        }
      }
    ]
  }
}
