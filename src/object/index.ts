/**
 * Object utilities
 *
 * @example
 * ```ts
 * import { isObject, isPlainObject } from '@kazupon/jts-utils/object'
 * ```
 *
 * @module object
 */

/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

import { Merge } from '../types/index.ts'

/**
 * check if a value is an object
 *
 * @param value - a value to check
 * @returns whether the value is an object
 *
 * @example
 * ```ts
 * import { isObject } from '@kazupon/jts-utils'
 *
 * const result1 = isObject({}); // true
 * const result2 = isObject(null); // false
 * const result3 = isObject(42); // false
 * ```
 */
export const isObject = (value: unknown): value is object =>
  // prettier-ignore
  value !== null && typeof value === 'object'

/**
 * check if a value is a plain object
 *
 * @param value - a value to check
 * @returns  whether the value is a plain object
 *
 * @example
 * ```ts
 * import { isPlainObject } from '@kazupon/jts-utils'
 *
 * const result1 = isPlainObject({}); // true
 * const result2 = isPlainObject(null); // false
 * const result3 = isPlainObject([]); // false
 * const result4 = isPlainObject(() => {}); // false
 */
export const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  // prettier-ignore
  value !== null &&
  typeof value === 'object' &&
  !Array.isArray(value) &&
  !(typeof value === 'function')

const objectToString = Object.prototype.toString // eslint-disable-line @typescript-eslint/unbound-method -- inline

/**
 * get the type string of a value
 *
 * @param value - target value
 * @returns type string with `[object ${type}]`
 *
 * @example
 * ```ts
 * import { toTypeString } from '@kazupon/jts-utils'
 *
 * const result1 = toTypeString({}); // "[object Object]"
 * const result2 = toTypeString([]); // "[object Array]"
 * const result4 = toTypeString(42); // "[object Number]"
 * ```
 */
export const toTypeString = (value: unknown): string => objectToString.call(value)

/**
 * get the raw type of a value
 *
 * @param value - target value
 * @returns extract "RawType" from strings like "[object RawType]"
 *
 * @example
 * ```ts
 * import { toRawType } from '@kazupon/jts-utils'
 *
 * const result1 = toRawType({}); // "Object"
 * const result2 = toRawType([]); // "Array"
 * const result3 = toRawType(42); // "Number"
 * ```
 */
export const toRawType = (value: unknown): string =>
  // prettier-ignore
  toTypeString(value).slice(8, -1)

/**
 * create a new object
 *
 * @param object - prototype object, default is null
 * @returns a new object
 *
 * @example
 * ```ts
 * import { create } from '@kazupon/jts-utils'
 *
 * const obj1 = create() // {}
 * const proto = { a: 1 }
 * const obj2 = create(proto) // inherits prototype
 * ```
 */
export const create = <
  T extends object | null = null,
  R = T extends null ? object : Merge<T, typeof Object.prototype>
>(
  object: T | null = null
): R => Object.create(object) as R

const hasOwnProperty = Object.prototype.hasOwnProperty // eslint-disable-line @typescript-eslint/unbound-method -- inline

/**
 * check if an object has a property
 *
 * @param target - a target object
 * @param key - property key of the object
 * @returns whether the object has the property
 *
 * @example
 * ```ts
 * import { hasOwn } from '@kazupon/jts-utils'
 *
 * const obj = { a: 1 }
 * const result1 = hasOwn(obj, 'a') // true
 * const result2 = hasOwn(obj, 'b') // false
 * ```
 */
export function hasOwn(target: object | Array<any>, key: string | number | symbol): boolean {
  return hasOwnProperty.call(target, key)
}

/**
 * get own property value of an object
 *
 * @param target - a target object
 * @param key - property key of the object
 * @returns the property value, if the object has the property, otherwise undefined
 *
 * @example
 * ```ts
 * import { getOwn } from '@kazupon/jts-utils'
 *
 * const obj = { a: 1 }
 * const result1 = getOwn(obj, 'a') // 1
 * const result2 = getOwn(obj, 'b') // undefined
 * ```
 */
export function getOwn<T extends object, K extends keyof T>(target: T, key: K): T[K] | undefined {
  return hasOwn(target, key) ? target[key] : undefined
}
