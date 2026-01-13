/**
 * Event emitter utils
 *
 * @example
 * ```ts
 * import { createEmitter } from '@kazupon/jts-utils/event/emitter'
 * ```
 *
 * @module event/emitter
 */

/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

/**
 * Event type
 */
export type EventType = string | symbol

/**
 * Event handler
 */
export type EventHandler<T = unknown> = T extends undefined ? () => void : (payload: T) => void

/**
 * Event stop handler
 */
export interface EventStopHandler extends Disposable {
  (): void
}

/**
 * Wildcard event handler
 */
export type WildcardEventHandler<T = Record<string, unknown>> = (
  event: keyof T,
  payload?: T[keyof T]
) => void

/**
 * Event handler list
 */
export type EventHandlerList<T = unknown> = Array<EventHandler<T>>

/**
 * Wildcard event handler list
 */
export type WildcardEventHandlerList<T = Record<string, unknown>> = Array<WildcardEventHandler<T>>

/**
 * Event handler map
 */
export type EventHandlerMap<Events extends Record<EventType, unknown>> = Map<
  keyof Events | '*',
  EventHandlerList<Events[keyof Events]> | WildcardEventHandlerList<Events>
>

/**
 * Event emitter interface
 */
export interface Emittable<Events extends Record<EventType, unknown> = {}> {
  /**
   * A map of event names of registered event handlers
   */
  // events: EventHandlerMap<Events>

  /**
   * Register a wildcard event handler that receives all events
   *
   * @param event - The wildcard event type "*"
   * @param handler - A {@link WildcardEventHandler}
   * @returns An {@link EventStopHandler}
   */
  on(event: '*', handler: WildcardEventHandler<Events>): EventStopHandler

  /**
   * Register an event handler with the event type
   *
   * @param event - An {@link EventType}
   * @param handler - An {@link EventHandler}
   * @returns An {@link EventStopHandler}
   */
  on<Key extends keyof Events>(event: Key, handler: EventHandler<Events[Key]>): EventStopHandler

  /**
   * Unregister a wildcard event handler
   *
   * @param event - The wildcard event type "*"
   * @param handler - A {@link WildcardEventHandler}
   */
  off(event: '*', handler: WildcardEventHandler<Events>): void

  /**
   * Unregister an event handler for the event type
   *
   * @param event - An {@link EventType}
   * @param handler - An {@link EventHandler}
   */
  off<Key extends keyof Events>(event: Key, handler: EventHandler<Events[Key]>): void

  /**
   * Invoke all handlers with the event type.
   *
   * Note Manually firing "*" handlers should be not supported
   *
   * @param event - An {@link EventType}
   * @param payload - An event payload, optional if the event type is `undefined`
   */
  emit<Key extends keyof Events>(
    event: Key,
    ...payload: Events[Key] extends undefined ? [] : [payload: Events[Key]]
  ): void
}

/**
 * An options for {@link createEmitter}
 */
export interface EmitterOptions {
  /**
   * Disable wildcard event handlers
   *
   * @default true
   */
  disableWildcard?: boolean
}

/**
 * Create a event emitter
 *
 * This event emitter forked and inspired from the below:
 * - original repository url: https://github.com/developit/mitt
 * - code url: https://github.com/developit/mitt/blob/master/src/index.ts
 * - author: Jason Miller (https://github.com/developit)
 *
 * @param options - An optional {@link EmitterOptions}
 * @returns An event emitter, which is {@link Emittable}
 */
export function createEmitter<Events extends Record<EventType, unknown>>(
  options?: EmitterOptions
): Readonly<Emittable<Events>> {
  const disableWildcard = options?.disableWildcard ?? true

  type GenericEventHandler = EventHandler<Events[keyof Events]> | WildcardEventHandler<Events>
  const events = new Map() as EventHandlerMap<Events>

  /**
   * Register a wildcard event handler.
   * This function is implemented for {@link Emittable.on}
   *
   * @param event - The wildcard event type "*"
   * @param handler - A {@link WildcardEventHandler}
   * @returns An {@link EventStopHandler}
   */
  function on(event: '*', handler: WildcardEventHandler<Events>): EventStopHandler
  /**
   * Register an event handler.
   * This function is implemented for {@link Emittable.on}
   *
   * @param event - An {@link EventType}
   * @param handler - An {@link EventHandler}
   * @returns An {@link EventStopHandler}
   */
  function on<Key extends keyof Events>(
    event: Key,
    handler: EventHandler<Events[Key]>
  ): EventStopHandler
  function on<Key extends keyof Events>(
    event: Key | '*',
    handler: GenericEventHandler
  ): EventStopHandler {
    const handlers: Array<GenericEventHandler> | undefined = events.get(event)
    const added = handlers?.push(handler)
    if (!added) {
      events.set(event, [handler] as EventHandlerList<Events[keyof Events]>)
    }
    const stop = (): void => {
      off(event as keyof Events, handler as EventHandler<Events[keyof Events]>)
    }
    stop[Symbol.dispose] = stop
    return stop
  }

  /**
   * Unregister a wildcard event handler.
   * This function is implemented for {@link Emittable.off}
   *
   * @param event - The wildcard event type "*"
   * @param handler - A {@link WildcardEventHandler}
   */
  function off(event: '*', handler: WildcardEventHandler<Events>): void
  /**
   * Unregister an event handler.
   * This function is implemented for {@link Emittable.off}
   *
   * @param event - An {@link EventType}
   * @param handler - An {@link EventHandler}
   */
  function off<Key extends keyof Events>(event: Key, handler: EventHandler<Events[Key]>): void
  function off<Key extends keyof Events>(event: Key | '*', handler: GenericEventHandler): void {
    const handlers: Array<GenericEventHandler> | undefined = events.get(event)
    handlers?.splice(handlers.indexOf(handler) >>> 0, 1)
  }

  /**
   * Invoke all handlers with the event type.
   * This function is implemented for {@link Emittable.emit}
   *
   * @param event - An {@link EventType}
   * @param args - An event payload, optional if the event type is undefined
   */
  function emit<Key extends keyof Events>(
    event: Key,
    ...args: Events[Key] extends undefined ? [] : [payload: Events[Key]]
  ): void {
    const payload = args[0] as Events[keyof Events]
    ;((events.get(event) || []) as EventHandlerList<Events[keyof Events]>)
      .slice()
      .map(handler => handler(payload))
    if (disableWildcard) {
      return
    }
    ;(events.get('*') || []).slice().map(handler => handler(event, payload))
  }

  return Object.freeze({
    on,
    off,
    emit
  })
}
