# Module Options

## Provide

- Type: `boolean`
- Default: `true`

Provides the main `$gsap` core with plugins globally.

```ts
// nuxt.config.ts

{
  gsap: {
    provide: true
  }
}
```

**Available globally**

```ts
const { $gsap } = useNuxtApp()

$gsap.to('.class', { rotation: 3, x: 100, duration: 1 })
```

## Composables

- Type: `boolean`
- Default: `undefined`

Specifies custom composables.

If enabled, allows the use of custom composables.

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true
  }
}
```

It is possible to use _provide_ helper and _composables_ in combination or separately, depending on preference.

When using _only_ composables, it is recommended to disable global import.

```ts
// nuxt.config.ts

{
  gsap: {
    composables: true
    provide: false // global import
  }
}
```

## Auto Import

- Type: `boolean`
- Default: `true`

Specifies the `auto-import` feature.

If enabled, the composables will be available globally so there is no need to import them manually.

Since this is an opinionated feature, you can disable global `auto-import` and use explicit import only where you need it.

> [!NOTE]\
> Works only if the option `composables: true` is enabled.

```ts
// nuxt.config.ts

{
  gsap: {
    autoImport: false
  }
}
```
