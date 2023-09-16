# Club Plugins

- Type: `object`
- Default: `undefined`

Specifies GSAP premium plugins.

This is only available to club members as it requires a paid license.

Keep in mind that premium plugins must be installed according to the official GSAP guidelines before use.

For more information about club plugins, check the official pages.

## DrawSvg

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

## useDrawSVGPlugin

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    clubPlugins: {
      drawSvg: true
    }
  }
}
```

**Usage**

```ts
useDrawSVGPlugin
```

```ts
// Explicit import (optional)
import { useDrawSVGPlugin } from '#gsap'
```

## ScrollSmoother

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

## useScrollSmoother

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    clubPlugins: {
      scrollSmoother: true
    }
  }
}
```

**Usage**

```ts
useScrollSmoother
```

```ts
// Explicit import (optional)
import { useScrollSmoother } from '#gsap'
```

## GsDevTools

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

## useGSDevTools

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    clubPlugins: {
      gsDevTools: true
    }
  }
}
```

**Usage**

```ts
useGSDevTools
```

```ts
// Explicit import (optional)
import { useGSDevTools } from '#gsap'
```

## Inertia

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

## useInertiaPlugin

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    clubPlugins: {
      inertia: true
    }
  }
}
```

**Usage**

```ts
useInertiaPlugin
```

```ts
// Explicit import (optional)
import { useInertiaPlugin } from '#gsap'
```

## MorphSvg

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

## useMorphSVGPlugin

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    clubPlugins: {
      morphSvg: true
    }
  }
}
```

**Usage**

```ts
useMorphSVGPlugin
```

```ts
// Explicit import (optional)
import { useMorphSVGPlugin } from '#gsap'
```

## MotionPathHelper

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

## useMotionPathHelper

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    clubPlugins: {
      motionPathHelper: true
    }
  }
}
```

**Usage**

```ts
useMotionPathHelper
```

```ts
// Explicit import (optional)
import { useMotionPathHelper } from '#gsap'
```

## Physics2d

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

## usePhysics2DPlugin

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    clubPlugins: {
      physics2d: true
    }
  }
}
```

**Usage**

```ts
usePhysics2DPlugin
```

```ts
// Explicit import (optional)
import { usePhysics2DPlugin } from '#gsap'
```

## PhysicsProps

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

## usePhysicsPropsPlugin

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    clubPlugins: {
      physicsProps: true
    }
  }
}
```

**Usage**

```ts
usePhysicsPropsPlugin
```

```ts
// Explicit import (optional)
import { usePhysicsPropsPlugin } from '#gsap'
```

## ScrambleText

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

## useScrambleText

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    clubPlugins: {
      scrambleText: true
    }
  }
}
```

**Usage**

```ts
useScrambleText
```

```ts
// Explicit import (optional)
import { useScrambleText } from '#gsap'
```

## SplitText

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

## useSplitText

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    clubPlugins: {
      splitText: true
    }
  }
}
```

**Usage**

```ts
useSplitText
```

```ts
// Explicit import (optional)
import { useSplitText } from '#gsap'
```

## CustomBounce

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

## useCustomBounce

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    clubPlugins: {
      customBounce: true
    }
  }
}
```

**Usage**

```ts
useCustomBounce
```

```ts
// Explicit import (optional)
import { useCustomBounce } from '#gsap'
```

## CustomWiggle

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

## useCustomWiggle

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    clubPlugins: {
      customWiggle: true
    }
  }
}
```

**Usage**

```ts
useCustomWiggle
```

```ts
// Explicit import (optional)
import { useCustomWiggle } from '#gsap'
```
