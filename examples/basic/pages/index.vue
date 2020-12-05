<template>
  <div>
    <h1>NUXT GSAP</h1>

    <button @click="p1">CLICK ME</button>
    <p>NUXT GSAP</p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.rotation()
  },
  methods: {
    p1() {
      this.$gsap.to('p', { rotation: 27, x: 100, duration: 1 })
    },
    rotation() {
      const gsap = this.$gsap
      gsap.to('h1', { rotation: 27, x: 100, duration: 1 })
    }
  }
}
</script>
