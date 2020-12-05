<template>
  <div>
    <h1
      v-gsap.to="{
        rotation: 360,
        x: 150,
        duration: 2
      }"
    >
      NUXT GSAP
    </h1>
    <span
      v-gsap.from="{
        opacity: 0,
        x: -200,
        duration: 1
      }"
    >
      NUXT GSAP
    </span>
    <p
      v-gsap.fromTo="[
        { opacity: 0, y: -350 },
        { opacity: 1, y: 0, duration: 3 }
      ]"
    >
      NUXT GSAP
    </p>
    <p v-gsap.set="{ x: 100, y: 50 }">NUXT GSAP</p>
  </div>
</template>

<script>
export default {}
</script>
