<template>
  <div class="page-index">
    <p>
      <NuxtLink to="about">ABOUT</NuxtLink>
    </p>
    <div class="content">
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.animateOnScroll()
  },

  methods: {
    animateOnScroll() {
      this.$gsap.to(window, { duration: 2, scrollTo: 1000 })

      this.$gsap.to('.box', {
        x: 500,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.content',
          pin: true,
          end: 'bottom',
          scrub: true
        }
      })
    }
  }
}
</script>

<style>
.page-index {
  color: #e2e8f0;
  background-color: #2f495e;
  min-height: 100vh;
}

.content {
  width: 100vw;
  min-height: 300vh;
}
.box {
  width: 100px;
  height: 100px;
  background-color: #00c58e;
}
</style>
