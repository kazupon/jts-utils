/**
 * Vue type utilities
 *
 * @example
 * ```ts
 * import type { MaybeRef, MaybeRefOrGetter } from '@kazupon/jts-utils/vue'
 * ```
 *
 * @module Vue
 */

/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

import type { Ref } from '@vue/reactivity'

/**
 * define `ref` or premitive type
 *
 * @typeParam T - Type of the value
 *
 * @example
 * ```ts
 * import type { MaybeRef } from '@kazupon/jts-utils/vue'
 *
 * const value1: MaybeRef<number> = 42
 * const value2: MaybeRef<number> = ref(42)
 * ```
 */
export type MaybeRef<T = any> = T | Ref<T>

/**
 * define `ref`, primitive type or getter function
 *
 * @typeParam T - Type of the value, default `any`
 *
 * @example
 * ```ts
 * import type { MaybeRefOrGetter } from '@kazupon/jts-utils/vue'
 *
 * const value1: MaybeRefOrGetter<number> = 42
 * const value2: MaybeRefOrGetter<number> = ref(42)
 * const value3: MaybeRefOrGetter<number> = () => 42
 * ```
 */
export type MaybeRefOrGetter<T = any> = MaybeRef<T> | (() => T)
