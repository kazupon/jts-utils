/**
 * Timeout utilities
 *
 * Runtime-agnostic promise-based timers, similar to `node:timers/promises`.
 *
 * @example
 * ```ts
 * import { setTimeout, setInterval } from '@kazupon/jts-utils/timeout'
 * ```
 *
 * @module timeout
 */

/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

import { abortError } from '../abort/index.ts'

/**
 * Options for timer functions
 */
export interface TimerOptions {
  /**
   * An optional {@link AbortSignal} to cancel the timer
   */
  signal?: AbortSignal
}

/**
 * Promise-based setTimeout
 *
 * Resolves with the given value after the specified delay.
 *
 * @typeParam T - The type of the resolved value
 *
 * @param delay - The delay in milliseconds. Defaults to 0
 * @param value - The value to resolve with
 * @param options - {@link TimerOptions}
 * @returns A promise that resolves with the value after the delay
 * @throws {DOMException | unknown} When the signal is aborted
 *
 * @example
 * ```ts
 * // wait 1 second
 * await setTimeout(1000)
 *
 * // wait 1 second and get a value
 * const result = await setTimeout(1000, 'hello')
 *
 * // with abort signal
 * const controller = new AbortController()
 * await setTimeout(1000, undefined, { signal: controller.signal })
 * ```
 */
export function setTimeout<T = undefined>(
  delay?: number,
  value?: T,
  options?: TimerOptions
): Promise<T> {
  const signal = options?.signal

  if (signal?.aborted) {
    return Promise.reject(abortError(signal) as Error)
  }

  return new Promise<T>((resolve, reject) => {
    const id = globalThis.setTimeout(() => {
      signal?.removeEventListener('abort', onAbort)
      resolve(value as T)
    }, delay ?? 0)

    const onAbort = (): void => {
      globalThis.clearTimeout(id)
      reject(abortError(signal) as Error)
    }

    if (signal) {
      signal.addEventListener('abort', onAbort, { once: true })
      // Re-check after adding listener to avoid race condition
      if (signal.aborted) {
        globalThis.clearTimeout(id)
        reject(abortError(signal) as Error)
      }
    }
  })
}

/**
 * Promise-based setInterval
 *
 * Yields the given value at each interval. The async generator can be
 * cancelled by aborting the signal or by breaking out of the loop.
 *
 * @typeParam T - The type of the yielded value
 *
 * @param delay - The interval in milliseconds. Defaults to 0
 * @param value - The value to yield at each interval
 * @param options - {@link TimerOptions}
 * @returns An async generator that yields the value at each interval
 *
 * @yields {T}
 *
 * @example
 * ```ts
 * // yield every 100ms
 * const controller = new AbortController()
 * for await (const v of setInterval(100, 'tick', { signal: controller.signal })) {
 *   console.log(v) // 'tick'
 * }
 * ```
 */
export async function* setInterval<T = undefined>(
  delay?: number,
  value?: T,
  options?: TimerOptions
): AsyncGenerator<T> {
  const signal = options?.signal

  if (signal?.aborted) {
    return
  }

  while (true) {
    try {
      await setTimeout(delay, value, { signal })
      // Check again after await in case signal was aborted during the wait
      if (signal?.aborted) {
        return
      }
      yield value as T
    } catch {
      // Aborted by signal
      return
    }
  }
}
