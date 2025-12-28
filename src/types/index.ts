/**
 * Type utilities
 *
 * @example
 * ```ts
 * import type { Awaitable } from '@kazupon/jts-utils'
 * ```
 *
 * @module Types
 */

/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

/**
 * Define a promise type that can be await from T
 *
 * @typeParam T - Type to be awaited
 *
 * @example
 * ```ts
 * import type { Awaitable } from '@kazupon/jts-utils'
 *
 * // Example with a synchronous value
 * const syncValue: Awaitable<number> = 42
 * // Example with a Promise
 * const asyncValue: Awaitable<number> = Promise.resolve(42)
 * ```
 */
export type Awaitable<T> = T | Promise<T>

/**
 * Extract module type with interoperability for CJS `module.exports`
 *
 * @typeParam T - Module type
 *
 * @example
 * ```ts
 * import type { InteropModuleDefault } from '@kazupon/jts-utils'
 *
 * // Example for `default` export in ESM Module
 * type ESMModule = {
 *   default: {
 *     foo: string
 *   }
 * }
 * type ESMResult = InteropModuleDefault<ESMModule>
 * // Resulting type:
 * // {
 * //   foo: string
 * // }
 *
 * // Example for CJS Module
 * type CJSModule = {
 *   foo: string
 * }
 * type CJSResult = InteropModuleDefault<CJSModule>
 * // Resulting type:
 * // {
 * //   foo: string
 * // }
 * ```
 */
export type InteropModuleDefault<T> = T extends { default: infer U } ? U : T

/**
 * Convert a union to intersection
 *
 * @typeParam U - Union type
 *
 * @example
 * ```ts
 * import type { UnionToIntersection } from '@kazupon/jts-utils'
 *
 * type Union = { a: string } | { b: number }
 * type Intersection = UnionToIntersection<Union>
 * // Resulting type:
 * // {
 * //   a: string
 * // } & {
 * //   b: number
 * // }
 * ```
 */
export type UnionToIntersection<U> = (U extends unknown ? (argument: U) => 0 : never) extends (
  argument: infer I
) => 0
  ? I
  : never

/**
 * Extract the last element in a union
 *
 * @typeParam U - Union type
 *
 * @example
 * ```ts
 * import type { LastInUnion } from '@kazupon/jts-utils'
 *
 * type MyUnion = { a: string } | { b: number } | { c: boolean }
 * type LastElement = LastInUnion<MyUnion>
 * // Resulting type:
 * // {
 * //   c: boolean
 * // }
 * ```
 */
export type LastInUnion<U> =
  UnionToIntersection<U extends unknown ? (x: U) => 0 : never> extends (x: infer L) => 0 ? L : never

/**
 * Convert a union to tuple
 *
 * @typeParam U - Union type
 *
 * @example
 * ```ts
 * import type { UnionToTuple } from '@kazupon/jts-utils'
 *
 * type MyUnion = { a: string } | { b: number } | { c: boolean }
 * type MyTuple = UnionToTuple<MyUnion>
 * // Resulting type:
 * // [
 * //   { a: string },
 * //   { b: number },
 * //   { c: boolean }
 * // ]
 * ```
 */
export type UnionToTuple<U, Last = LastInUnion<U>> = [U] extends [never]
  ? []
  : [...UnionToTuple<Exclude<U, Last>>, Last]

/**
 * Merge two types
 *
 * @typeParam F - First type
 * @typeParam S - Second type
 *
 * @example
 * ```ts
 * import type { Merge } from '@kazupon/jts-utils'
 *
 * type First = {
 *   a: number
 *   b: string
 * }
 * type Second = {
 *   b: boolean
 *   c: string
 * }
 * type Merged = Merge<First, Second>
 * // Resulting type:
 * // {
 * //   a: number
 * //   b: boolean
 * //   c: string
 * // }
 * ```
 */
export type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never
}

/**
 * Check never type
 *
 * @typeParam T - Type to check
 *
 * @example
 * ```ts
 * import type { IsNever } from '@kazupon/jts-utils'
 *
 * type A = IsNever<never> // true
 * type B = IsNever<string> // false
 * ```
 */
export type IsNever<T> = [T] extends [never] ? true : false

/**
 * whether the type is null
 *
 * @typeParam T - Type to check
 *
 * @example
 * ```ts
 * import type { IsNull } from '@kazupon/jts-utils'
 *
 * type A = IsNull<null> // true
 * type B = IsNull<string> // false
 * ```
 */
export type IsNull<T> = T extends null ? true : false

/**
 * whether the type is object
 *
 * @typeParam T - Type to check
 *
 * @example
 * ```ts
 * import type { IsObject } from '@kazupon/jts-utils'
 *
 * type A = IsObject<{ a: number }> // true
 * type B = IsObject<string> // false
 * ```
 */
export type IsObject<T> = T extends object ? (T extends Function ? false : true) : false

/**
 * whether the type is a plain object
 *
 * @typeParam T - Type to check
 *
 * @example
 * ```ts
 * import type { IsPlainObject } from '@kazupon/jts-utils'
 *
 * type A = IsPlainObject<{ a: number }> // true
 * type B = IsPlainObject<string[]> // false
 * type C = IsPlainObject<Function> // false
 * ```
 */
export type IsPlainObject<T> = T extends object
  ? T extends Function | Array<any> | null
    ? false
    : true
  : false

/**
 * Overwrite properties
 *
 * @typeParam T - Original type
 * @typeParam U - Type with properties to overwrite
 *
 * @example
 * ```ts
 * import type { Overwrite } from '@kazupon/jts-utils'
 *
 * type Original = {
 *   a: number
 *   b: string
 * }
 * type Overwritten = Overwrite<Original, { a: string; b: boolean; }>
 * // Resulting type:
 * // {
 * //   a: string
 * //   b: boolean
 * // }
 * ```
 */
export type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> &
  Pick<U, Extract<keyof U, keyof T>>

/**
 * Prettify a type by flattening its structure.
 *
 * @typeParam T - The type to be prettified.
 *
 * @example
 * ```ts
 * import type { Prettify, Overwrite } from '@kazupon/jts-utils'
 *
 * type Original = {
 *   a: number
 *   b: string
 * }
 * type Update = {
 *   a: string
 *   b: boolean
 * }
 * type Overwritten = Overwrite<Original, Update>
 * type Prettified = Prettify<Overwritten>
 * // Resulting type:
 * // {
 * //   a: string
 * //   b: boolean
 * // }
 * ```
 */
export type Prettify<T> = { [K in keyof T]: T[K] } & {}
