/**
 * Message Port Utilities
 *
 * @example
 * ```ts
 * import { safeMessagePort } from '@kazupon/jts-utils/message/port'
 * ```
 *
 * @module message/port
 */

/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

import { Emitter } from '../event/emitter.ts'

import type { Emittable } from '../event/emitter.ts'

/**
 * Message port events
 *
 * @typeParam T - Message data type
 */
export type MessagePortEvents<T = unknown> = {
  /**
   * `message` event
   */
  message: MessageEvent<T>
  /**
   * `messageerror` event
   */
  messageerror: MessageEvent
}

/**
 * Safe MessagePort wrapper interface
 *
 * @typeParam T - Message data type
 */
export interface SafeMessagePort<T = unknown> extends Emittable<MessagePortEvents<T>>, Disposable {
  /**
   * Post a message through the port
   *
   * @param message - The message to post
   * @param transfer - Optional transferable objects
   */
  postMessage(message: T, transfer?: Transferable[]): void

  /**
   * Start receiving messages on this port
   */
  start(): void

  /**
   * Close the port and release all resources
   */
  close(): void

  /**
   * Add an event listener to the underlying port
   */
  addEventListener: MessagePort['addEventListener']

  /**
   * Remove an event listener from the underlying port
   */
  removeEventListener: MessagePort['removeEventListener']

  /**
   * Dispatch an event to the underlying port
   */
  dispatchEvent: MessagePort['dispatchEvent']

  /**
   * The onmessage event handler
   */
  onmessage: MessagePort['onmessage']

  /**
   * The onmessageerror event handler
   */
  onmessageerror: MessagePort['onmessageerror']
}

/**
 * Return type for {@link safeMessagePort}
 *
 * @typeParam T - Message data type
 */
export type SafeMessagePortResult<T = unknown> = Readonly<
  Omit<SafeMessagePort<T>, 'onmessage' | 'onmessageerror'>
> &
  Pick<SafeMessagePort<T>, 'onmessage' | 'onmessageerror'>

/**
 * Create a safe {@link MessagePort} wrapper as an {@link Emittable | event emitter}
 *
 * The returned SafeMessagePort will automatically handle the closing of the `MessagePort` when disposed, and it will also manage event listeners to prevent memory leaks.
 *
 * The underlying `MessagePort` will be started automatically.
 *
 * @typeParam T - Message data type
 *
 * @param port - The MessagePort to wrap
 * @returns A {@link SafeMessagePort} that wraps the `MessagePort`
 *
 * @example
 * ```ts
 * const channel = new MessageChannel()
 * const port = safeMessagePort<{ greeting: string }>(channel.port1)
 *
 * port.on('message', (event) => {
 *   console.log(event.data.greeting)  // type-safe
 * })
 *
 * port.postMessage({ greeting: 'hello' })  // type-safe
 * ```
 */
export function safeMessagePort<T = unknown>(port: MessagePort): SafeMessagePortResult<T> {
  const _emitter = Emitter<MessagePortEvents<T>>()
  let _closed = false

  const onMessage = (event: Event): void => {
    _emitter.emit('message', event as MessageEvent<T>)
  }
  const onMessageError = (event: Event): void => {
    _emitter.emit('messageerror', event as MessageEvent)
  }

  port.addEventListener('message', onMessage)
  port.addEventListener('messageerror', onMessageError)
  port.start()

  const close = (): void => {
    if (_closed) return
    _closed = true
    port.removeEventListener('message', onMessage)
    port.removeEventListener('messageerror', onMessageError)
    _emitter[Symbol.dispose]()
    port.close()
  }

  return {
    // Emittable methods
    on: _emitter.on,
    off: _emitter.off,
    emit: _emitter.emit,
    once: _emitter.once,

    // MessagePort methods
    postMessage: (message: T, transfer?: Transferable[]) => {
      port.postMessage(message, transfer ?? [])
    },
    start: () => port.start(),
    close,

    // EventTarget methods (passthrough)
    addEventListener: port.addEventListener.bind(port),
    removeEventListener: port.removeEventListener.bind(port),
    dispatchEvent: port.dispatchEvent.bind(port),

    // `onmessage` / `onmessageerror` (getter/setter passthrough)
    get onmessage() {
      return port.onmessage
    },
    set onmessage(handler) {
      port.onmessage = handler
    },
    get onmessageerror() {
      return port.onmessageerror
    },
    set onmessageerror(handler) {
      port.onmessageerror = handler
    },

    // Disposable
    dispose: close,
    [Symbol.dispose]: close
  }
}
