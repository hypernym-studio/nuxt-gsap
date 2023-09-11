# Nuxt Gsap Module

GSAP module for Nuxt.

## Features

- Helps you integrate the GSAP animation library
- Provides a solution for global use
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

That's it! Start developing your app!

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

GSAP core is enabled by default on module activation.

```ts
// nuxt.config.ts

{
  modules: ['@hypernym/nuxt-gsap'],
}
```

**Available globally**

```ts
const { $gsap } = useNuxtApp()

$gsap.to('.box', { rotation: 27, x: 100, duration: 1 })
```

## Extra Plugins

Specifies GSAP extra plugins.

### Flip

- Type: `boolean`
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
const { $Flip } = useNuxtApp()
```

### ScrollTrigger

- Type: `boolean`
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
const { $ScrollTrigger } = useNuxtApp()
```

### Observer

- Type: `boolean`
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
const { $Observer } = useNuxtApp()
```

### ScrollTo

- Type: `boolean`
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
const { $ScrollToPlugin } = useNuxtApp()
```

### Draggable

- Type: `boolean`
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
const { $Draggable } = useNuxtApp()
```

### Easel

- Type: `boolean`
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
const { $EaselPlugin } = useNuxtApp()
```

### MotionPath

- Type: `boolean`
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
const { $MotionPathPlugin } = useNuxtApp()
```

### Pixi

- Type: `boolean`
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
const { $PixiPlugin } = useNuxtApp()
```

### Text

- Type: `boolean`
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
const { $TextPlugin } = useNuxtApp()
```

## Extra Eases

Specifies GSAP extra eases.

### ExpoScale

- Type: `boolean`
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
const { $ExpoScaleEase } = useNuxtApp()
```

### Rough

- Type: `boolean`
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
const { $RoughEase } = useNuxtApp()
```

### SlowMo

- Type: `boolean`
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
const { $SlowMo } = useNuxtApp()
```

### Custom

- Type: `boolean`
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
const { $CustomEase } = useNuxtApp()
```

## Register Effects

- Type: `object[]`
- Default: `undefined`

Provides an easy way to register global effects.

Once the effect is registered, it can be accessed directly on the `gsap.effects` object.

To avoid possible linting warnings, use `// eslint-disable-next-line` and `// @ts-ignore` comments.

```ts
// nuxt.config.ts

{
  gsap: {
    registerEffects: [
      {
        name: 'fade',
        defaults: {
          y: -100,
          opacity: 0,
          duration: 2,
        },
        // eslint-disable-next-line
        // @ts-ignore
        effect: (targets, config) => {
          return gsap.to(targets, {
            y: config.y,
            opacity: config.opacity,
            duration: config.duration,
          })
        },
      },
      {
        name: 'slideIn',
        // ...
      },
    ]
  }
}
```

**Available globally**

```ts
const { $gsap } = useNuxtApp()

$gsap.effects.fade('.class')
$gsap.effects.slideIn('#id')
```

## Register Eases

- Type: `object[]`
- Default: `undefined`

Provides an easy way to register global eases.

Once the ease is registered, it can be accessed directly on the `gsap` animations.

```ts
// nuxt.config.ts

{
  gsap: {
    registerEases: [
      {
        name: 'customEase',
        ease: (progress) => {
          return progress // linear
        },
      },
      {
        name: 'customEase2',
        // ...
      },
    ]
  }
}
```

**Available globally**

```ts
const { $gsap } = useNuxtApp()

$gsap.to('.class', { x: 100, ease: 'customEase' })
$gsap.to('#id', { x: 200, ease: 'customEase2' })
```

## Club Plugins

Specifies GSAP premium plugins.

This is only available to club members as it requires a paid license.

Keep in mind that premium plugins must be installed according to the official GSAP guidelines before use.

For more information about club plugins, check the official pages.

### DrawSvg

- Type: `boolean`
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
const { $DrawSVGPlugin } = useNuxtApp()
```

### ScrollSmoother

- Type: `boolean`
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
const { $ScrollSmoother } = useNuxtApp()
```

### GsDevTools

- Type: `boolean`
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
const { $GSDevTools } = useNuxtApp()
```

### Inertia

- Type: `boolean`
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
const { $InertiaPlugin } = useNuxtApp()
```

### MorphSvg

- Type: `boolean`
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
const { $MorphSVGPlugin } = useNuxtApp()
```

### MotionPathHelper

- Type: `boolean`
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
const { $MotionPathHelper } = useNuxtApp()
```

### Physics2d

- Type: `boolean`
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
const { $Physics2DPlugin } = useNuxtApp()
```

### PhysicsProps

- Type: `boolean`
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
const { $PhysicsPropsPlugin } = useNuxtApp()
```

### ScrambleText

- Type: `boolean`
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
const { $ScrambleText } = useNuxtApp()
```

### SplitText

- Type: `boolean`
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
const { $SplitText } = useNuxtApp()
```

### CustomBounce

- Type: `boolean`
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
const { $CustomBounce } = useNuxtApp()
```

### CustomWiggle

- Type: `boolean`
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
