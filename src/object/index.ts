import { Merge } from '../types/index.ts'

/**
 * Check if a value is an object
 * @param value a value to check
 * @returns whether the value is an object
 */
export const isObject = (value: unknown): value is object =>
  // prettier-ignore
  value !== null && typeof value === 'object'

/**
 * Check if a value is a plain object
 * @param value a value to check
 * @returns  whether the value is a plain object
 */
export const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  // prettier-ignore
  value !== null &&
  typeof value === 'object' &&
  !Array.isArray(value) &&
  !(value instanceof Function)

const objectToString = Object.prototype.toString // eslint-disable-line @typescript-eslint/unbound-method

/**
 * Get the type string of a value
 * @param value target value
 * @returns type string with `[object ${type}]`
 */
export const toTypeString = (value: unknown): string => objectToString.call(value)

/**
 * Get the raw type of a value
 * @param value target value
 * @returns extract "RawType" from strings like "[object RawType]"
 */
export const toRawType = (value: unknown): string =>
  // prettier-ignore
  toTypeString(value).slice(8, -1)

/**
 * create a new object
 * @description this utility is sugar function of `Object.create` function, accept same arguments, which is prototype object.
 * @param object an object, default is null
 * @returns a new object
 */

export const create = <
  T extends object | null = null,
  R = T extends null ? object : Merge<T, typeof Object.prototype>
>(
  object: T | null = null // eslint-disable-line unicorn/no-null
): R => Object.create(object) as R
