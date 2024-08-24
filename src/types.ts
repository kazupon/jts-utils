/**
 * Define a promise type that can be await from T
 */
export type Awaitable<T> = T | Promise<T>

/**
 * Extract module type with interoperability for CJS `module.exports`
 */
export type InteropModuleDefault<T> = T extends { default: infer U } ? U : T
