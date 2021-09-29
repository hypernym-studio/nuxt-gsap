<template>
  <div>
    <h1 class="title1">NUXT GSAP</h1>

    <button @click="setRotationOnClick">CLICK ME</button>
    <h3 class="title2">NUXT GSAP</h3>
  </div>
</template>

<script>
export default {
  mounted() {
    this.setRotationOnLoad()
  },
  methods: {
    setRotationOnClick() {
      this.$gsap.to('.title2', { rotation: 90, x: 100, duration: 2 })
    },
    setRotationOnLoad() {
      this.$gsap.to('.title1', { rotation: 27, x: 100, duration: 1 })
    }
  }
}
</script>
