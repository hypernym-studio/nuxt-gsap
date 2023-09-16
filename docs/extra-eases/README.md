# Extra Eases

- Type: `object`
- Default: `undefined`

Specifies GSAP extra eases.

## ExpoScale

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

## useExpoScaleEase

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    extraEases: {
      expoScale: true
    }
  }
}
```

**Usage**

```ts
useExpoScaleEase
```

```ts
// Explicit import (optional)
import { useExpoScaleEase } from '#gsap'
```

## Rough

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

## useRoughEase

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    extraEases: {
      rough: true
    }
  }
}
```

**Usage**

```ts
useRoughEase
```

```ts
// Explicit import (optional)
import { useRoughEase } from '#gsap'
```

## SlowMo

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

## useSlowMo

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    extraEases: {
      slowMo: true
    }
  }
}
```

**Usage**

```ts
useSlowMo
```

```ts
// Explicit import (optional)
import { useSlowMo } from '#gsap'
```

## Custom

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

## useCustomEase

- Custom composable

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true,
    extraEases: {
      custom: true
    }
  }
}
```

**Usage**

```ts
useCustomEase
```

```ts
// Explicit import (optional)
import { useCustomEase } from '#gsap'
```
