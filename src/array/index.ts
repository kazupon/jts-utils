/**
 * Array utilities
 *
 * @example
 * ```ts
 * import { toArray } from '@kazupon/jts-utils/array'
 * ```
 *
 * @module array
 */

/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

/**
 * convert to array
 *
 * @param value - a value
 * @returns convrted array
 *
 * @example
 * ```ts
 * import { toArray } from '@kazupon/jts-utils'
 *
 * const result1 = toArray(42)
 * // result1: [42]
 * const result2 = toArray([1, 2, 3])
 * // result2: [1, 2, 3]
 * ```
 */
export function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}
