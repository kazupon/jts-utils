/**
 * Rust like Result/Option Utils
 *
 * @example
 * ```ts
 * import { ok, err } from '@kazupon/jts-utils'
 * import type { Result } from '@kazupon/jts-utils'
 * ```
 *
 * @module Result
 */

/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

/**
 * Type representing a successful value
 *
 * @typeParam T - Type of the success value
 *
 * @example
 * ```ts
 * import type { Ok } from '@kazupon/jts-utils'
 *
 * const result: Ok<number> = { ok: true, value: 42 };
 * ```
 */
export type Ok<T> = { ok: true; value: T } // eslint-disable-line jsdoc/require-jsdoc -- disable unintended eslint detection

/**
 * Type representing a failure value
 *
 * @typeParam E - Type of the error value
 *
 * @example
 * ```ts
 * import type { Err } from '@kazupon/jts-utils'
 *
 * // With an Error object
 * const errorObject: Err<Error> = { ok: false, error: new Error("Something went wrong") };
 * // With a string error
 * const errorString: Err<string> = { ok: false, error: "Something went wrong" };
 * ```
 */
export type Err<E> = { ok: false; error: E } // eslint-disable-line jsdoc/require-jsdoc -- disable unintended eslint detection

/**
 * Result type representing success or failure
 *
 * @typeParam T - Type of the success value, defaults to `void`
 * @typeParam E - Type of the error value, defaults to `unknown`
 *
 * @example
 * ```ts
 * import type { Result } from '@kazupon/jts-utils'
 *
 * // Success example
 * const successResult: Result<number, string> = { ok: true, value: 42 };
 *
 * // Failure example
 * const failureResult: Result<number, string> = { ok: false, error: "An error occurred" };
 * ```
 */
export type Result<T = void, E = unknown> = Ok<T> | Err<E>

/**
 * Utility function to create an Ok object for success
 *
 * @example
 * ```ts
 * import { ok } from '@kazupon/jts-utils'
 *
 * const result = ok(42); // Type is Ok<number>
 * ```
 *
 * @typeParam T - Type of the success value, defaults to `void`
 *
 * @param value - The success value
 * @returns An {@link Ok} object
 */
export function ok<T = void>(value?: T): Ok<T> {
  return { ok: true, value: value as T }
}

/**
 * Utility function to create an Err object for failure
 *
 * @example
 * ```ts
 * import { err } from '@kazupon/jts-utils'
 *
 * const result = err("An error occurred"); // Type is Err<string>
 * ```
 *
 * @typeParam E - Type of the error value
 *
 * @param error - The error value
 * @returns An {@link Err} object
 */
export function err<E>(error: E): Err<E> {
  return { ok: false, error }
}

/**
 * Type guard function to check if a Result is Ok
 *
 * @example
 * ```ts
 * import { isOk } from '@kazupon/jts-utils'
 * import type { Result } from '@kazupon/jts-utils'
 *
 * const result: Result<number, string> = someFunction();
 * if (isOk(result)) {
 *   // Handle success
 *   console.log(result.value);
 * } else {
 *   // Handle failure
 *   console.error(result.error);
 * }
 * ```
 *
 * @typeParam T - Type of the success value
 * @typeParam E - Type of the error value
 *
 * @param result - The Result object to check
 * @returns true if the Result is Ok, false if it is Err
 */
export function isOk<T, E>(result: Result<T, E>): result is Ok<T> {
  return result.ok
}

/**
 * Type guard function to check if a Result is Err
 *
 * @example
 * ```ts
 * import { isErr } from '@kazupon/jts-utils'
 * import type { Result } from '@kazupon/jts-utils'
 *
 * const result: Result<number, string> = someFunction();
 * if (isErr(result)) {
 *   // Handle failure
 *   console.error(result.error);
 * } else {
 *   // Handle success
 *   console.log(result.value);
 * }
 * ```
 *
 * @param result - The Result object to check
 * @returns true if the Result is Err, false if it is Ok
 */
export function isErr<T, E>(result: Result<T, E>): result is Err<E> {
  return !result.ok
}

/**
 * Utility function to extract the success value from a Result
 *
 * @example
 * ```ts
 * import { unwrap } from '@kazupon/jts-utils'
 * import type { Result } from '@kazupon/jts-utils'
 *
 * const result: Result<number, string> = someFunction();
 * try {
 *   const value = unwrap(result);
 *   console.log("Success:", value);
 * } catch (e) {
 *   console.error("Error:", e);
 * }
 * ```
 *
 * @typeParam T - Type of the success value
 * @typeParam E - Type of the error value
 *
 * @param result - The Result object to unwrap
 * @returns The success value
 * @throws {Error} Throws the error from Err as-is on failure. If not an Error object, converts it to an Error object before throwing.
 */
export function unwrap<T, E>(result: Result<T, E>): T {
  if (isOk(result)) {
    return result.value
  } else {
    if (result.error instanceof Error) {
      throw result.error
    } else {
      throw new Error(String(result.error))
    }
  }
}
