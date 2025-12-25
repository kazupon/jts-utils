/**
 * String utilities
 *
 * @example
 * ```ts
 * import { pascalize } from '@kazupon/jts-utils/string'
 * ```
 *
 * @module string
 *
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

/**
 * pascalize string
 *
 * @param value - a string value
 * @returns pascalized string
 */
export function pascalize(value: string): string {
  return value.replaceAll(/\w+/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase())
}
