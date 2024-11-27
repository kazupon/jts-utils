/**
 * Define a promise type that can be await from T
 */
export type Awaitable<T> = T | Promise<T>

/**
 * Extract module type with interoperability for CJS `module.exports`
 */
export type InteropModuleDefault<T> = T extends { default: infer U } ? U : T

/**
 * Convert a union to intersection
 */
export type UnionToIntersection<U> = (U extends unknown ? (argument: U) => 0 : never) extends (
  argument: infer I
) => 0
  ? I
  : never

/**
 * Extract the last element in a union
 */
export type LastInUnion<U> =
  UnionToIntersection<U extends unknown ? (x: U) => 0 : never> extends (x: infer L) => 0 ? L : never

/**
 * Convert a union to tuple
 */
export type UnionToTuple<U, Last = LastInUnion<U>> = [U] extends [never]
  ? []
  : [...UnionToTuple<Exclude<U, Last>>, Last]

/**
 * Merge two types
 */
export type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never
}

/**
 * Check never type
 */
export type IsNever<T> = [T] extends [never] ? true : false

/**
 * whether the type is null
 */
export type IsNull<T> = T extends null ? true : false

/**
 * whether the type is object
 */
export type IsObject<T> = T extends object
  ? T extends Function // eslint-disable-line @typescript-eslint/no-unsafe-function-type
    ? false
    : true
  : false

/**
 * whether the type is a plain object
 */
export type IsPlainObject<T> = T extends object
  ? T extends Function | Array<any> | null // eslint-disable-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-function-type
    ? false
    : true
  : false
