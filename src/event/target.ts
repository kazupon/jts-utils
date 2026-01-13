/**
 * Event target utils
 *
 * @example
 * ```ts
 * import { waitOnce } from '@kazupon/jts-utils/event/target'
 * ```
 *
 * @module event/target
 */

/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

/**
 * Event Stop handler
 */
export interface EventTargetStopHandler extends Disposable {
  (): void
}

/**
 * Attach an event listener to the target
 *
 * @typeParam T - The type of the target
 *
 * @param _target - The event target
 * @param _type - The event type
 * @param _listenerOrOptions - An optional event listener or {@link AddEventListenerOptions}
 * @param _options - An optional {@link AddEventListenerOptions}
 * @returns A handler to stop the event listener
 */
export function on<T extends EventTarget>(
  _target: T,
  _type: string, // TODO: type safety and 'type' key completion from EventMaps
  _listenerOrOptions?: EventListener | AddEventListenerOptions,
  _options?: AddEventListenerOptions
): EventTargetStopHandler {
  // TODO: implement this

  const stop = () => {
    throw new Error('Not implemented yet')
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- FIXME
  ;(stop as any)[Symbol.dispose] = () => {
    throw new Error('Not implemented yet')
  }

  return stop as unknown as EventTargetStopHandler
}

/**
 * Detach an event listener from the target
 *
 * @param _target - The event target
 * @param _type - The event type
 * @param _listenerOrOptions - An optional event listener or {@link AddEventListenerOptions}
 * @param _options - An optional {@link AddEventListenerOptions}
 */
export function off<T extends EventTarget>(
  _target: T,
  _type: string, // TODO: type safety and 'type' key completion from EventMaps
  _listenerOrOptions?: EventListener | AddEventListenerOptions,
  _options?: AddEventListenerOptions
): void {
  throw new Error('Not implemented yet')
}
