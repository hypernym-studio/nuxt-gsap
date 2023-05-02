# Nuxt Gsap Module

GSAP module for Nuxt.

## Features

- Helps you integrate the GSAP animation library
- Provides a solution for global use
- Enables plugins with a simple boolean option
- Automatically registers plugins after activation
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

That's it! Start developing your app!

## Module

Nuxt Gsap Module is completely rewritten in TypeScript. It also improves the development experience with detailed descriptions, examples and code auto-completion.

The module comes with a _zero-config_ setup so after activation it automatically adds the GSAP core and it is globally available without additional settings.

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

It is very easy to activate additional plugins using the module options.

When a specific plugin is activated, it is instantly available for global use so there is no need to manually import or register plugins.

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

- Default: `true`

GSAP core is enabled by default on module activation.

```ts
// nuxt.config.ts

{
  modules: ['@hypernym/nuxt-gsap'],
}
```

**Available globally**

```ts
// Access GSAP by using
const { $gsap } = useNuxtApp()

$gsap.to('.box', { rotation: 27, x: 100, duration: 1 })
```

## Extra Plugins

Specifies GSAP extra plugins.

### Flip

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    extraPlugins: {
      flip: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $Flip } = useNuxtApp()
```

### ScrollTrigger

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $ScrollTrigger } = useNuxtApp()
```

### Observer

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    extraPlugins: {
      observer: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $Observer } = useNuxtApp()
```

### ScrollTo

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    extraPlugins: {
      scrollTo: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $ScrollToPlugin } = useNuxtApp()
```

### Draggable

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    extraPlugins: {
      draggable: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $Draggable } = useNuxtApp()
```

### Easel

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    extraPlugins: {
      easel: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $EaselPlugin } = useNuxtApp()
```

### MotionPath

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    extraPlugins: {
      motionPath: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $MotionPathPlugin } = useNuxtApp()
```

### Pixi

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    extraPlugins: {
      pixi: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $PixiPlugin } = useNuxtApp()
```

### Text

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    extraPlugins: {
      text: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $TextPlugin } = useNuxtApp()
```

## Extra Eases

Specifies GSAP extra eases.

### ExpoScale

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    extraEases: {
      expoScale: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $ExpoScaleEase } = useNuxtApp()
```

### Rough

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    extraEases: {
      rough: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $RoughEase } = useNuxtApp()
```

### SlowMo

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    extraEases: {
      slowMo: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $SlowMo } = useNuxtApp()
```

### Custom

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    extraEases: {
      custom: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $CustomEase } = useNuxtApp()
```

## Club Plugins

Specifies GSAP premium plugins.

This is only available to club members as it requires a paid license.

Keep in mind that premium plugins must be installed according to the official GSAP guidelines before use.

For more information about club plugins, check the official pages.

### DrawSvg

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    clubPlugins: {
      drawSvg: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $DrawSVGPlugin } = useNuxtApp()
```

### ScrollSmoother

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    clubPlugins: {
      scrollSmoother: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $ScrollSmoother } = useNuxtApp()
```

### GsDevTools

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    clubPlugins: {
      gsDevTools: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $GSDevTools } = useNuxtApp()
```

### Inertia

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    clubPlugins: {
      inertia: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $InertiaPlugin } = useNuxtApp()
```

### MorphSvg

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    clubPlugins: {
      morphSvg: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $MorphSVGPlugin } = useNuxtApp()
```

### MotionPathHelper

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    clubPlugins: {
      motionPathHelper: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $MotionPathHelper } = useNuxtApp()
```

### Physics2d

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    clubPlugins: {
      physics2d: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $Physics2DPlugin } = useNuxtApp()
```

### PhysicsProps

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    clubPlugins: {
      physicsProps: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $PhysicsPropsPlugin } = useNuxtApp()
```

### ScrambleText

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    clubPlugins: {
      scrambleText: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $ScrambleText } = useNuxtApp()
```

### SplitText

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    clubPlugins: {
      splitText: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $SplitText } = useNuxtApp()
```

### CustomBounce

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    clubPlugins: {
      customBounce: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $CustomBounce } = useNuxtApp()
```

### CustomWiggle

- Default: `undefined`

```ts
// nuxt.config.ts

{
  gsap: {
    clubPlugins: {
      customWiggle: true
    }
  }
}
```

**Available globally**

```ts
// Access the plugin by using
const { $CustomWiggle } = useNuxtApp()
```

## Community

Feel free to use the official [discussions](https://github.com/hypernym-studio/nuxt-gsap/discussions) for any additional questions.

## License

### Gsap Platform

More details about GSAP licenses can be found in the <a href="https://github.com/greensock/GSAP#license">official</a> repository.

### Nuxt Gsap Module

Developed in 🇭🇷 Croatia

Released under the [MIT](LICENSE.txt) license.

© Hypernym Studio
