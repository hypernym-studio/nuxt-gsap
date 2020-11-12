<p align="center">
    <img src=".github/assets/cover.svg" >
</p>

<h1>Nuxt GSAP Module</h1>

GSAP module for Nuxt.js

## Features

- Helps you integrate `GSAP` javascript animation library
- Allows you to easily set options through the module
- Provides a solution for building `high-performance` animations that work in `every` major browser
- Includes `zero-config` setup ready to go
- [and much more](https://greensock.com/gsap/) 🔥

## Setup

1. Add `nuxt-gsap-module` dependency to your project

```bash
$ npm install --save-dev nuxt-gsap-module
```

2. Add `nuxt-gsap-module` to the `buildModules` section of `nuxt.config.js`

```js
// nuxt.config.js

export default {
  buildModules: ['nuxt-gsap-module'],

  gsap: {
    /* module options */
  }
}
```

## Examples

**Nuxt global page transitions**

```js
// nuxt.config.js

{
  // Enable module
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

**Simple box rotation**

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

**Multiple plugins usage example**

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

const gsap = this.$gsap
const ExpoScaleEase = this.$ExpoScaleEase
const ScrollToPlugin = this.$ScrollToPlugin
const ScrollTrigger = this.$ScrollTrigger

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, ExpoScaleEase)
```

## Options

**Default options**

```js
// nuxt.config.js

{
  gsap: {
    extraPlugins: {
      cssRule: false,
      draggable: false,
      easel: false,
      motionPath: false,
      pixi: false,
      text: false,
      scrollTo: false,
      scrollTrigger: false
    },
    extraEases: {
      expoScaleEase: false,
      roughEase: false,
      slowMo: false,
    }
  }
}
```

### GSAP's core

#### `gsap`

- Default: `true`

GSAP's core is enabled by default so there is no need for additional configuration.

> Available on both `client-side` and `server-side`

```js
// nuxt.config.js

{
  buildModules: ['nuxt-gsap-module']
}
```

```js
// Access GSAP by using
this.$gsap

// Rotate and move elements with a class of "box" over the course of 1 second
this.$gsap.to('.box', { rotation: 27, x: 100, duration: 1 })

// or
const gsap = this.$gsap
gsap.to('.box', { rotation: 27, x: 100, duration: 1 })
```

### Extra Plugins

#### `cssRule`

- Default: `false`

> Available on `client-side` only

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
// Usage

const gsap = this.$gsap
const CSSRulePlugin = this.$CSSRulePlugin

gsap.registerPlugin(CSSRulePlugin)
```

[More info](https://greensock.com/docs/v3/Plugins/CSSRulePlugin)

#### `draggable`

- Default: `false`

> Available on `client-side` only

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
// Usage

const gsap = this.$gsap
const Draggable = this.$Draggable

gsap.registerPlugin(Draggable)
```

[More info](https://greensock.com/docs/v3/Plugins/Draggable)

#### `easel`

- Default: `false`

> Available on `client-side` only

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
// Usage

const gsap = this.$gsap
const EaselPlugin = this.$EaselPlugin

gsap.registerPlugin(EaselPlugin)
```

[More info](https://greensock.com/docs/v3/Plugins/EaselPlugin)

#### `motionPath`

- Default: `false`

> Available on `client-side` only

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
// Usage

const gsap = this.$gsap
const MotionPathPlugin = this.$MotionPathPlugin

gsap.registerPlugin(MotionPathPlugin)
```

[More info](https://greensock.com/docs/v3/Plugins/MotionPathPlugin)

#### `pixi`

- Default: `false`

> Available on `client-side` only

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
// Usage

const gsap = this.$gsap
const PixiPlugin = this.$PixiPlugin

gsap.registerPlugin(PixiPlugin)
```

[More info](https://greensock.com/docs/v3/Plugins/PixiPlugin)

#### `text`

- Default: `false`

> Available on `client-side` only

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
// Usage

const gsap = this.$gsap
const TextPlugin = this.$TextPlugin

gsap.registerPlugin(TextPlugin)
```

[More info](https://greensock.com/docs/v3/Plugins/TextPlugin)

#### `scrollTo`

- Default: `false`

> Available on `client-side` only

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
// Usage

const gsap = this.$gsap
const ScrollToPlugin = this.$ScrollToPlugin

gsap.registerPlugin(ScrollToPlugin)
```

[More info](https://greensock.com/docs/v3/Plugins/ScrollToPlugin)

#### `scrollTrigger`

- Default: `false`

> Available on `client-side` only

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
// Usage

const gsap = this.$gsap
const ScrollTrigger = this.$ScrollTrigger

gsap.registerPlugin(ScrollTrigger)
```

[More info](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

### Extra eases

#### `expoScaleEase`

- Default: `false`

> Available on `client-side` only

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
// Usage

const gsap = this.$gsap
const ExpoScaleEase = this.$ExpoScaleEase

gsap.registerPlugin(ExpoScaleEase)
```

[More info](https://greensock.com/docs/v3/Eases/ExpoScaleEase)

#### `roughEase`

- Default: `false`

> Available on `client-side` only

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
// Usage

const gsap = this.$gsap
const RoughEase = this.$RoughEase

gsap.registerPlugin(RoughEase)
```

[More info](https://greensock.com/docs/v3/Eases/RoughEase)

#### `slowMo`

- Default: `false`

> Available on `client-side` only

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
// Usage

const gsap = this.$gsap
const SlowMo = this.$SlowMo

gsap.registerPlugin(SlowMo)
```

[More info](https://greensock.com/docs/v3/Eases/SlowMo)

## License

**GSAP**

For more information, check the official GSAP site.

[GSAP License](https://greensock.com/licensing/)

Copyright (c) GreenSock

**Nuxt GSAP module**

[MIT License](LICENSE)

Copyright (c) Ivo Dolenc
