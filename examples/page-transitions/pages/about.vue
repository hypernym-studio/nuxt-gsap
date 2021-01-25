<template>
  <div class="page-about">
    <NuxtLink to="/">HOME</NuxtLink>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'scale',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,
        scale: 0
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  }
}
</script>

<style>
.page-about {
  display: flex;
  color: #fff;
  background-color: #00c58e;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
