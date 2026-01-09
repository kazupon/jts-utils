/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

import { abortError } from '../abort/index.ts'

// TODO: `once` should support optoin which is same as `addEventListener` options

/**
 * Add an event listener that resolves once when the event is fired or rejects if aborted
 *
 * @example
 * ```ts
 * import { once } from '@kazupon/jts-utils'
 *
 * const target = new EventTarget()
 *
 * // wait for 'load' event
 * await once(target, 'load')
 * // do something after 'load' event is fired
 *
 * // wait for 'data' event with abort signal
 * const controller = new AbortController()
 * await once(target, 'data', controller.signal)
 * // do something after 'data' event is fired or abort the waiting by controller.abort()
 * ```
 *
 * @typeParam T - The type of the target
 *
 * @param target - The event target
 * @param type - The event type
 * @param signal - An optional {@link AbortSignal} to cancel waiting
 * @returns A promise that resolves when the event is fired
 * @throws {DOMException | unknown} when the signal is aborted
 */
export function once<T extends EventTarget>(
  target: T,
  type: string,
  signal?: AbortSignal
): Promise<void> {
  if (signal?.aborted) {
    return Promise.reject(abortError(signal) as Error)
  }

  return new Promise((resolve, reject) => {
    const onAbort = () => {
      reject(abortError(signal) as Error)
    }
    const onEvent = () => {
      signal?.removeEventListener('abort', onAbort)
      resolve()
    }

    // add abort listener first, then check abort status to avoid race condition
    if (signal) {
      signal.addEventListener('abort', onAbort, { once: true })
      if (signal.aborted) {
        reject(abortError(signal) as Error)
        return
      }
    }

    // signal option automatically removes listener when aborted
    target.addEventListener(type, onEvent as EventListener, { once: true, signal })
  })
}
