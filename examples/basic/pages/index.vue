<template>
  <div class="page-index">
    <NuxtLink to="about">ABOUT</NuxtLink>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'slide',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        scale: 1,
        opacity: 0,
        top: '-100%'
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        top: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        top: '100%',
        duration: 1,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  }
}
</script>

<style>
.page-index {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  color: #e2e8f0;
  background-color: #2f495e;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}
</style>
