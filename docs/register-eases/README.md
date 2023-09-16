# Register Eases

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
