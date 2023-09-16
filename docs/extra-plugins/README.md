# Extra Plugins

- Type: `object`
- Default: `undefined`

Specifies GSAP extra plugins.

## Flip

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

## useFlip

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    extraPlugins: {
      flip: true
    }
  }
}
```

**Usage**

```ts
useFlip
```

```ts
// Explicit import (optional)
import { useFlip } from '#gsap'
```

## ScrollTrigger

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

## useScrollTrigger

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    extraPlugins: {
      scrollTrigger: true
    }
  }
}
```

**Usage**

```ts
useScrollTrigger
```

```ts
// Explicit import (optional)
import { useScrollTrigger } from '#gsap'
```

## Observer

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

## useObserver

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    extraPlugins: {
      observer: true
    }
  }
}
```

**Usage**

```ts
useObserver
```

```ts
// Explicit import (optional)
import { useObserver } from '#gsap'
```

## ScrollTo

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

## useScrollToPlugin

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    extraPlugins: {
      scrollTo: true
    }
  }
}
```

**Usage**

```ts
useScrollToPlugin
```

```ts
// Explicit import (optional)
import { useScrollToPlugin } from '#gsap'
```

## Draggable

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

## useDraggable

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    extraPlugins: {
      draggable: true
    }
  }
}
```

**Usage**

```ts
useDraggable
```

```ts
// Explicit import (optional)
import { useDraggable } from '#gsap'
```

## Easel

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

## useEaselPlugin

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    extraPlugins: {
      easel: true
    }
  }
}
```

**Usage**

```ts
useEaselPlugin
```

```ts
// Explicit import (optional)
import { useEaselPlugin } from '#gsap'
```

## MotionPath

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

## useMotionPathPlugin

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    extraPlugins: {
      motionPath: true
    }
  }
}
```

**Usage**

```ts
useMotionPathPlugin
```

```ts
// Explicit import (optional)
import { useMotionPathPlugin } from '#gsap'
```

## Pixi

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

## usePixiPlugin

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    extraPlugins: {
      pixi: true
    }
  }
}
```

**Usage**

```ts
usePixiPlugin
```

```ts
// Explicit import (optional)
import { usePixiPlugin } from '#gsap'
```

## Text

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

## useTextPlugin

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    extraPlugins: {
      text: true
    }
  }
}
```

**Usage**

```ts
useTextPlugin
```

```ts
// Explicit import (optional)
import { useTextPlugin } from '#gsap'
```
