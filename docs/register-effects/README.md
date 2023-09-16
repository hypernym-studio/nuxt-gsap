# Register Effects

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
