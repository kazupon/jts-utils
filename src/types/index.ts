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
 * Check never type
 */
export type IsNever<T> = [T] extends [never] ? true : false
