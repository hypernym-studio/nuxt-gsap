<template>
  <div id="__default">
    <NavMain />
    <slot />
  </div>
</template>

<style>
body {
  font-family: sans-serif;
  background: #111;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a,
a:hover,
a:visited {
  color: #fff;
  text-decoration: none;
}
</style>
