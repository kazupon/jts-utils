/**
 * Abort module
 *
 * @example
 * ```ts
 * import { abortError, throwIfAborted } from '@kazupon/jts-utils'
 * ```
 *
 * @module Abort
 */

/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

/**
 * AbortError options for {@link abortError}
 */
export interface AbortErrorOptions {
  /**
   * The error message
   *
   * @default 'Aborted'
   */
  message?: string
  /**
   * The error name
   *
   * @default 'AbortError'
   */
  name?: string
}

/**
 * Create an AbortError
 *
 * @example
 * ```ts
 * import { abortError } from '@kazupon/jts-utils'
 *
 * const controller = new AbortController()
 * controller.abort()
 * const error = abortError(controller.signal, { message: 'Custom abort message' })
 * console.log(error) // DOMException: Custom abort message
 * ```
 *
 * @param signal - An {@link AbortSignal}
 * @param options - An {@link AbortErrorOptions}
 * @returns if the signal has a reason, return it; otherwise, return a new DOMException with the specified options.
 */
export function abortError(signal?: AbortSignal, options?: AbortErrorOptions): unknown {
  return (
    signal?.reason ?? new DOMException(options?.message ?? 'Aborted', options?.name ?? 'AbortError')
  )
}

/**
 * Throw an AbortError if the signal is aborted
 *
 * @example
 * ```ts
 * import { throwIfAborted } from '@kazupon/jts-utils'
 *
 * const controller = new AbortController()
 * controller.abort()
 * throwIfAborted(controller.signal) // Throws DOMException: Aborted
 * ```
 *
 * @param signal - An {@link AbortSignal}
 * @throws {unknown} - An abort error via {@link abortError}
 */
export function throwIfAborted(signal?: AbortSignal): void {
  if (signal?.aborted) {
    throw abortError(signal)
  }
}
