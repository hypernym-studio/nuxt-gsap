import { gsap } from 'gsap'

/**
 * Provides the main `gsap` core as custom composable.
 *
 * @example
 *
 * ```ts
 * useGsap.to('.class', { rotation: 3, x: 100, duration: 1 })
 * ```
 *
 * @example
 *
 * ```ts
 * // Explicit import (optional)
 * import { useGsap } from '#gsap'
 * ```
 *
 * @since 2.3.0
 */
export declare const useGsap: typeof gsap
