/**
 * Array utilities
 *
 * @example
 * ```ts
 * import { toArray } from '@kazupon/jts-utils/array'
 * ```
 *
 * @module array
 *
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

/**
 * convert to array
 *
 * @param value - a value
 * @returns convrted array
 */
export function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}
