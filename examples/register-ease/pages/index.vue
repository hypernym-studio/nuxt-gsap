<template>
  <div>
    <h1 class="title">Nuxt GSAP Ease</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$gsap.to('.title', { x: 100, ease: 'ease.1' })
  }
}
</script>
