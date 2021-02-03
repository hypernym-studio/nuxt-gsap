<template>
  <div class="page-about">
    <p>
      <NuxtLink to="/">HOME</NuxtLink>
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$gsap.to(window, { duration: 1, scrollTo: 1000 })
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
  min-height: 500vh;
  width: 100%;
}
</style>
