# Nuxt Gsap Module

GSAP module for Nuxt.

## Features

- Helps you integrate the GSAP animation library
- Provides a solution for global use
- Supports custom composables
- Automatically registers plugins after activation
- Allows you to easily register global effects & eases
- Supports Club GreenSock premium plugins
- Zero-config setup ready to go
- TypeScript friendly
- Super easy to use

## Quick Start

1. Install `@hypernym/nuxt-gsap` to your project

```sh
npm i -D @hypernym/nuxt-gsap
```

2. Enable the module in the main config file

```ts
// nuxt.config.ts

{
  modules: ['@hypernym/nuxt-gsap']
}
```

That's it!

## Module

The module comes with a zero-config setup so after activation it automatically adds the GSAP core and it is globally available without additional settings.

```html
<!-- layout.vue | page.vue | component.vue -->

<template>
  <div>
    <h1 class="title">Nuxt Gsap</h1>
  </div>
</template>

<script setup lang="ts">
  const { $gsap } = useNuxtApp()

  onMounted(() => {
    $gsap.to('.title', { rotation: 3, x: 100, duration: 1 })
  })
</script>
```

## Options

Nuxt Gsap Module is completely rewritten in TypeScript. It also improves the development experience with detailed descriptions, examples and code auto-completion.

After plugin activation, it is immediately available globally, so there is no need to manually import or register.

```ts
// nuxt.config.ts

{
  modules: ['@hypernym/nuxt-gsap'],

  gsap: {
    // Module options
  }
}
```

## GSAP Core

It can be used via a `provide` helper that will be available globally or via a custom `composable` that you can import where you need it.

### Provide

GSAP core is enabled by default on module activation.

```ts
// nuxt.config.ts

{
  modules: ['@hypernym/nuxt-gsap'],
}
```

**Available globally**

```html
<script setup lang="ts">
  const { $gsap } = useNuxtApp()

  onMounted(() => {
    $gsap.to('.title', { rotation: 3, x: 100, duration: 1 })
  })
</script>
```

To disable the _provide_ helper completely, set it to `false`.

```ts
// nuxt.config.ts

{
  gsap: {
    provide: false
  }
}
```

### Composable

Imports the main `gsap` core as custom composable.

To enable custom [_composables_](#composables), set it to `true`:

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true
  }
}
```

#### useGsap

- Custom composable

```html
<!-- layout.vue | page.vue | component.vue -->

<template>
  <h1 class="title">Nuxt Gsap Module</h1>
</template>

<script setup lang="ts">
  useGsap.to('.title', { rotation: 3, x: 100, duration: 1 })
</script>
```

```ts
// Explicit import (optional)
import { useGsap } from '#gsap'
```

## Documentation

Check the official [docs](./docs) for more info.

## Community

Feel free to use the official [discussions](https://github.com/hypernym-studio/nuxt-gsap/discussions) for any additional questions.

## License

### Gsap Platform

More details about GSAP licenses can be found in the <a href="https://github.com/greensock/GSAP#license">official</a> repository.

### Nuxt Gsap Module

Developed in 🇭🇷 Croatia

Released under the [MIT](LICENSE.txt) license.

© Hypernym Studio
