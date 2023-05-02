<template>
  <div id="page-index">
    <h1>Index Page</h1>
  </div>
</template>

<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()

onMounted(() => {
  console.log($gsap)
  console.log($ScrollTrigger)
})
</script>
