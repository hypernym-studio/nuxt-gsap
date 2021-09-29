export default {
  buildModules: ['nuxt-gsap-module'],

  gsap: {
    registerEase: [
      {
        name: 'ease.1',
        ease: progress => {
          return progress // linear
        }
      }
    ]
  }
}
