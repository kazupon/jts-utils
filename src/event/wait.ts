/**
 * Event wating utils
 *
 * @example
 * ```ts
 * import { waitOnce } from '@kazupon/jts-utils/event/wait'
 * ```
 *
 * @module event/wait
 */

/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

import { abortError } from '../abort/index.ts'

// TODO: `waitOnce` should support option which is same as `addEventListener` options

/**
 * Wait for an event to be fired once on the target
 *
 * @example
 * ```ts
 * import { waitOnce } from '@kazupon/jts-utils'
 *
 * const target = new EventTarget()
 *
 * // wait for 'load' event
 * await waitOnce(target, 'load')
 * // do something after 'load' event is fired
 *
 * // wait for 'data' event with abort signal
 * const controller = new AbortController()
 * await waitOnce(target, 'data', controller.signal)
 * // do something after 'data' event is fired or abort the waiting by controller.abort()
 *
 * // wait for 'click' event with listener
 * await waitOnce(target, 'click', (event) => {
 *   console.log('clicked', event)
 * })
 *
 * // wait for 'submit' event with listener and abort signal
 * await waitOnce(target, 'submit', (event) => {
 *   console.log('submitted', event)
 * }, controller.signal)
 * ```
 *
 * @typeParam T - The type of the target
 *
 * @param target - The event target
 * @param type - The event type
 * @param listenerOrSignal - An optional event listener or {@link AbortSignal} to cancel waiting
 * @param signal - An optional {@link AbortSignal} to cancel waiting
 * @returns A promise that resolves when the event is fired
 * @throws {DOMException | unknown} when the signal is aborted
 */
export function waitOnce<T extends EventTarget>(
  target: T,
  type: string, // TODO: type safety and 'type' key completion from EventMaps
  listenerOrSignal?: EventListener | AbortSignal,
  signal?: AbortSignal
): Promise<void> {
  const fn = typeof listenerOrSignal === 'function' ? listenerOrSignal : undefined
  signal = listenerOrSignal instanceof AbortSignal ? listenerOrSignal : signal

  if (signal?.aborted) {
    return Promise.reject(abortError(signal) as Error)
  }

  return new Promise((resolve, reject) => {
    const onAbort = () => {
      reject(abortError(signal) as Error)
    }
    const onEvent = (event: Event) => {
      fn?.(event)
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

/**
 * An options for {@link waitFor}
 */
export interface WaitForOptions extends AddEventListenerOptions {
  /**
   * Number of times to wait for the event
   *
   * @default 1
   */
  times?: number
}

/**
 * Wait for an event to be fired on the target
 *
 * @typeParam T - The type of the target
 *
 * @param _target - The event target
 * @param _type - The event type
 * @param _listenerOrOptions - An optional event listener or {@link WaitForOptions}
 * @param _options - An optional {@link WaitForOptions}
 * @throws {DOMException | unknown} when the signal is aborted
 */
export function waitFor<T extends EventTarget>(
  _target: T,
  _type: string, // TODO: type safety and 'type' key completion from EventMaps
  _listenerOrOptions?: EventListener | WaitForOptions,
  _options?: WaitForOptions
): Promise<void> {
  // TODO: implement this
  throw new Error('Not implemented yet')
}
