import type {
  gsap as _gsap,
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  EaselPlugin,
  MotionPathPlugin,
  PixiPlugin,
  TextPlugin,
  ExpoScaleEase,
  RoughEase,
  SlowMo,
  CustomEase
} from 'gsap/all'

/**
 * Plugin Default
 *
 * @since 2.0.0
 */
export type PluginDefault = {
  gsap: typeof _gsap
  Flip: Flip
  ScrollTrigger: ScrollTrigger
  Observer: Observer
  ScrollToPlugin: typeof ScrollToPlugin
  Draggable: Draggable
  EaselPlugin: typeof EaselPlugin
  MotionPathPlugin: typeof MotionPathPlugin
  PixiPlugin: typeof PixiPlugin
  TextPlugin: typeof TextPlugin
  ExpoScaleEase: typeof ExpoScaleEase
  RoughEase: typeof RoughEase
  SlowMo: typeof SlowMo
  CustomEase: typeof CustomEase
}
