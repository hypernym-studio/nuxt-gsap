<template>
  <div>
    <h1 class="title">Nuxt GSAP Effect</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.applyCustomEffect()
  },
  methods: {
    applyCustomEffect() {
      this.$gsap.effects.fadeOut('.title')
    }
  }
}
</script>
