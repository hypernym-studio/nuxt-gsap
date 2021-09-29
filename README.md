<p align="center">
    <img src=".github/assets/cover.svg" >
</p>

<h1>Nuxt GSAP Module</h1>

GSAP module for Nuxt.js

## Features

- Helps you integrate `GSAP` javascript animation library
- Allows you to easily animate elements via custom `v-gsap` directive 🔥
- Provides a solution for global use via `this.$gsap` 🤩
- Automatically registers `plugins` after activation
- Allows you to easily register global `effects` & `eases`
- Supports `Club GreenSock` premium plugins 🟢
- `Zero-config` setup ready to go 🚀

## Quick Start

1. Install `nuxt-gsap-module` dependency to your project

```bash
$ npm install --save-dev nuxt-gsap-module # or yarn add -D nuxt-gsap-module
```

2. Enable `nuxt-gsap-module` in the `buildModules` section

```js
// nuxt.config.js

export default {
  buildModules: ['nuxt-gsap-module'],

  gsap: {
    /* Module Options */
  }
}
```

That's it! Start developing your app!

## Examples

Here are some code examples

- [Basic](https://github.com/ivodolenc/nuxt-gsap-module/tree/master/examples/basic)
- [Custom Directive](https://github.com/ivodolenc/nuxt-gsap-module/tree/master/examples/custom-directive)
- [Page Transitions](https://codesandbox.io/s/example-nuxt-gsap-module-basic-bqi7c)
- [Staggering](https://github.com/ivodolenc/nuxt-gsap-module/tree/master/examples/staggering)
- [Animate On Scroll](https://github.com/ivodolenc/nuxt-gsap-module/tree/master/examples/animate-on-scroll)
- [Register Effect](https://github.com/ivodolenc/nuxt-gsap-module/tree/master/examples/register-effect)
- [Register Ease](https://github.com/ivodolenc/nuxt-gsap-module/tree/master/examples/register-ease)

### Simple box rotation

```js
// index.vue

{
  mounted() {
    this.boxRotation()
  },

  methods: {
    boxRotation() {
      const gsap = this.$gsap
      gsap.to('.box', { rotation: 27, x: 100, duration: 1 })
    }
  }
}
```

### Nuxt global page transitions

```js
// nuxt.config.js

{
  buildModules: ['nuxt-gsap-module'],

  // Add global page transition
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  }
}
```

### Multiple plugins

After activation, plugins are automatically registered and available globally, so you won’t have to worry about it (applies to all plugins).

```js
// nuxt.config.js

{
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  }
}
```

```js
// Usage

export default {
  mounted() {
    this.animateOnScroll()
  },

  methods: {
    animateOnScroll() {
      this.$gsap.to(window, { duration: 2, scrollTo: 1000 })

      this.$gsap.to('.box', {
        x: 500,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.content',
          pin: true,
          end: 'bottom',
          scrub: true
        }
      })
    }
  }
}
```

## Custom Modifiers

Module allows you to easily animate elements via custom `v-gsap` directive and its modifiers.

### gsap.set()

- Modifier: **`v-gsap.set`**
- Default: `true`

```html
<template>
  <p v-gsap.set="{ x: 100, y: 50 }">NUXT GSAP</p>
</template>
```

[More info](https://greensock.com/docs/v3/GSAP/gsap.set)

### gsap.to()

- Modifier: **`v-gsap.to`**
- Default: `true`

```html
<template>
  <h1
    v-gsap.to="{
      rotation: 360,
      x: 150,
      duration: 2
    }"
  >
    NUXT GSAP
  </h1>
</template>
```

[More info](https://greensock.com/docs/v3/GSAP/gsap.to)

### gsap.from()

- Modifier: **`v-gsap.from`**
- Default: `true`

```html
<template>
  <span
    v-gsap.from="{
      opacity: 0, 
      x: -200, 
      duration: 1
    }"
  >
    NUXT GSAP
  </span>
</template>
```

[More info](https://greensock.com/docs/v3/GSAP/gsap.from)

### gsap.fromTo()

- Modifier: **`v-gsap.fromTo`**
- Default: `true`

```html
<template>
  <p
    v-gsap.fromTo="[
      { opacity: 0, y: -350 },
      { opacity: 1, y: 0, duration: 3 }
    ]"
  >
    NUXT GSAP
  </p>
</template>
```

[More info](https://greensock.com/docs/v3/GSAP/gsap.fromTo)

## Module Options

Here are all the `default` options that can be used for customization:

```js
// nuxt.config.js

{
  gsap: {
    extraPlugins: {},
    extraEases: {},
    clubPlugins: {},
    registerEffect: [],
    registerEase: [],
  }
}
```

## GSAP's core

### $gsap

- Default: `true`

GSAP's core is `enabled` by default so there is no need for additional configuration.

```js
// nuxt.config.js

{
  buildModules: ['nuxt-gsap-module']
}
```

**Available globally**

```js
// Access GSAP by using
this.$gsap

// or
const gsap = this.$gsap
gsap.to('.box', { rotation: 27, x: 100, duration: 1 })
```

## Register Effect

- Default: `[]`

This option allows you to easily register a global effect. Once the effect is registered, it can be accessed directly on the `gsap.effects` object.

```js
// nuxt.config.js

{
  gsap: {
    registerEffect: [
      {
        name: 'fadeIn',
        effect: (targets, config) => {
          // ...
        }
      },
      {
        name: 'fadeOut',
        effect: (targets, config) => {
          // ...
        }
      },
      {
        name: 'fadeInOut',
        effect: (targets, config) => {
          // ...
        }
      }
    ]
  }
}
```

```js
// Effects can be accessed as follows
this.$gsap.effects.fadeIn('.class')
this.$gsap.effects.fadeOut('#id')
this.$gsap.effects.fadeInOut(element)

// or
const gsap = this.$gsap
gsap.effects.fadeIn('.class')
gsap.effects.fadeOut('#id')
gsap.effects.fadeInOut(element)

// or directly on timelines
let tl = this.$gsap.timeline()
tl.fadeIn('.class', { duration: 3 })
  .fadeIn('#id', { duration: 1 }, '+=2')
  .to('.class2', { x: 100 })
```

[More info](https://greensock.com/docs/v3/GSAP/gsap.registerEffect)

## Register Ease

- Default: `[]`

This option allows you to easily register a global ease.

```js
// nuxt.config.js

{
  gsap: {
    registerEase: [
      {
        name: 'myEase',
        ease: progress => {
          return progress // linear
        }
      },
      {
        name: 'ease.2',
        ease: progress => {
          // ...
        }
      },
      {
        name: 'customEase.3',
        ease: progress => {
          // ...
        }
      }
    ]
  }
}
```

```html
<!-- index.vue -->

<template>
  <div>
    <h1 to="/about" class="title">Custom Title</h1>
    <p class="text">Custom text...</p>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$gsap.to('.title', { x: 100, ease: 'myEase' })
      this.$gsap.to('.text', { y: 100, ease: 'ease.2' })
    }
  }
</script>
```

[More info](https://greensock.com/docs/v3/GSAP/gsap.registerEase)

## Extra Plugins

### CSSRulePlugin

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    extraPlugins: {
      cssRule: true
    }
  }
}
```

```js
// Access the plugin by using
this.$CSSRulePlugin
```

[More info](https://greensock.com/docs/v3/Plugins/CSSRulePlugin)

### Draggable

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    extraPlugins: {
      draggable: true
    }
  }
}
```

```js
// Access the plugin by using
this.$Draggable
```

[More info](https://greensock.com/docs/v3/Plugins/Draggable)

### EaselPlugin

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    extraPlugins: {
      easel: true
    }
  }
}
```

```js
// Access the plugin by using
this.$EaselPlugin
```

[More info](https://greensock.com/docs/v3/Plugins/EaselPlugin)

### MotionPathPlugin

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    extraPlugins: {
      motionPath: true
    }
  }
}
```

```js
// Access the plugin by using
this.$MotionPathPlugin
```

[More info](https://greensock.com/docs/v3/Plugins/MotionPathPlugin)

### PixiPlugin

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    extraPlugins: {
      pixi: true
    }
  }
}
```

```js
// Access the plugin by using
this.$PixiPlugin
```

[More info](https://greensock.com/docs/v3/Plugins/PixiPlugin)

### TextPlugin

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    extraPlugins: {
      text: true
    }
  }
}
```

```js
// Access the plugin by using
this.$TextPlugin
```

[More info](https://greensock.com/docs/v3/Plugins/TextPlugin)

### ScrollToPlugin

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    extraPlugins: {
      scrollTo: true
    }
  }
}
```

```js
// Access the plugin by using
this.$ScrollToPlugin
```

[More info](https://greensock.com/docs/v3/Plugins/ScrollToPlugin)

### ScrollTrigger

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  }
}
```

```js
// Access the plugin by using
this.$ScrollTrigger
```

[More info](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

## Extra Eases

### ExpoScaleEase

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    extraEases: {
      expoScaleEase: true
    }
  }
}
```

```js
// Access the plugin by using
this.$ExpoScaleEase
```

[More info](https://greensock.com/docs/v3/Eases/ExpoScaleEase)

### RoughEase

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    extraEases: {
      roughEase: true
    }
  }
}
```

```js
// Access the plugin by using
this.$RoughEase
```

[More info](https://greensock.com/docs/v3/Eases/RoughEase)

### SlowMo

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    extraEases: {
      slowMo: true
    }
  }
}
```

```js
// Access the plugin by using
this.$SlowMo
```

[More info](https://greensock.com/docs/v3/Eases/SlowMo)

## Club GreenSock Plugins

`nuxt-gsap-module` supports Club GreenSock premium plugins. They can be easily activated via `module` settings, just like the free ones.

**Installation**

1. Follow the [official](https://youtu.be/30CivTsqqMY?t=87) instructions and install the `premium` plugins as usual.
2. After installation, simply activate the desired plugins and that's it, you're ready to go!

### CustomEase

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    clubPlugins: {
      customEase: true
    }
  }
}
```

```js
// Access the plugin by using
this.$CustomEase
```

[More info](https://greensock.com/docs/v3/Eases/CustomEase)

### CustomBounce

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    clubPlugins: {
      customBounce: true
    }
  }
}
```

```js
// Access the plugin by using
this.$CustomBounce
```

[More info](https://greensock.com/docs/v3/Eases/CustomBounce)

### CustomWiggle

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    clubPlugins: {
      customWiggle: true
    }
  }
}
```

```js
// Access the plugin by using
this.$CustomWiggle
```

[More info](https://greensock.com/docs/v3/Eases/CustomWiggle)

### DrawSVGPlugin

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    clubPlugins: {
      drawSVG: true
    }
  }
}
```

```js
// Access the plugin by using
this.$DrawSVGPlugin
```

[More info](https://greensock.com/docs/v3/Plugins/DrawSVGPlugin)

### Flip

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    clubPlugins: {
      flip: true
    }
  }
}
```

```js
// Access the plugin by using
this.$Flip
```

[More info](https://greensock.com/docs/v3/Plugins/Flip)

### GSDevTools

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    clubPlugins: {
      gsDevTools: true
    }
  }
}
```

```js
// Access the plugin by using
this.$GSDevTools
```

[More info](https://greensock.com/docs/v3/Plugins/GSDevTools)

### InertiaPlugin

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    clubPlugins: {
      inertia: true
    }
  }
}
```

```js
// Access the plugin by using
this.$InertiaPlugin
```

[More info](https://greensock.com/docs/v3/Plugins/InertiaPlugin)

### MorphSVGPlugin

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    clubPlugins: {
      morphSVG: true
    }
  }
}
```

```js
// Access the plugin by using
this.$MorphSVGPlugin
```

[More info](https://greensock.com/docs/v3/Plugins/MorphSVGPlugin)

### MotionPathHelper

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    clubPlugins: {
      motionPathHelper: true
    }
  }
}
```

```js
// Access the plugin by using
this.$MotionPathHelper
```

[More info](https://greensock.com/docs/v3/Plugins/MotionPathHelper)

### Physics2DPlugin

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    clubPlugins: {
      physics2D: true
    }
  }
}
```

```js
// Access the plugin by using
this.$Physics2DPlugin
```

[More info](https://greensock.com/docs/v3/Plugins/Physics2DPlugin)

### PhysicsPropsPlugin

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    clubPlugins: {
      physicsProps: true
    }
  }
}
```

```js
// Access the plugin by using
this.$PhysicsPropsPlugin
```

[More info](https://greensock.com/docs/v3/Plugins/PhysicsPropsPlugin)

### ScrambleTextPlugin

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    clubPlugins: {
      scrambleText: true
    }
  }
}
```

```js
// Access the plugin by using
this.$ScrambleTextPlugin
```

[More info](https://greensock.com/docs/v3/Plugins/ScrambleTextPlugin)

### SplitText

- Default: `false`

```js
// nuxt.config.js

{
  gsap: {
    clubPlugins: {
      splitText: true
    }
  }
}
```

```js
// Access the plugin by using
this.$SplitText
```

[More info](https://greensock.com/docs/v3/Plugins/SplitText)

## License

**GSAP**

[GSAP License](https://greensock.com/licensing/)

Copyright (c) GreenSock

**Nuxt GSAP module**

[MIT License](LICENSE)

Copyright (c) Ivo Dolenc
