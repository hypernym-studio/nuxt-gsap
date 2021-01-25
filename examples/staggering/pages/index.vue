<template>
  <div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.staggering()
  },
  methods: {
    staggering() {
      const gsap = this.$gsap

      gsap.to('.box', {
        x: 300,
        stagger: 0.1
      })
    }
  }
}
</script>
