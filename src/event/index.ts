/**
 * Event module
 *
 * @example
 * ```ts
 * import { createEmitter } from '@kazupon/jts-utils'
 * ```
 *
 * @module Event
 */

/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

/**
 * Event type
 */
type EventType = string | symbol

/**
 * Event handler
 */
type EventHandler<T = unknown> = (payload?: T) => void

/**
 * Event stop handler
 */
interface EventStopHandler extends Disposable {
  (): void
}

/**
 * Wildcard event handler
 */
type WildcardEventHandler<T = Record<string, unknown>> = (
  event: keyof T,
  payload?: T[keyof T]
) => void

/**
 * Event handler list
 */
type EventHandlerList<T = unknown> = Array<EventHandler<T>>

/**
 * Wildcard event handler list
 */
type WildcardEventHandlerList<T = Record<string, unknown>> = Array<WildcardEventHandler<T>>

/**
 * Event handler map
 */
type EventHandlerMap<Events extends Record<EventType, unknown>> = Map<
  keyof Events | '*',
  EventHandlerList<Events[keyof Events]> | WildcardEventHandlerList<Events>
>

/**
 * Event emitter interface
 */
interface Emittable<Events extends Record<EventType, unknown> = {}> {
  /**
   * A map of event names of registered event handlers
   */
  // events: EventHandlerMap<Events>

  /**
   * Register an event handler with the event type
   *
   * @param event - An {@link EventType}
   * @param handler - An {@link EventHandler}, or a {@link WildcardEventHandler} if you are specified "*"
   * @returns An {@link EventStopHandler}
   */
  on<Key extends keyof Events>(
    event: Key | '*',
    handler: EventHandler<Events[keyof Events]> | WildcardEventHandler<Events>
  ): EventStopHandler

  /**
   * Unregister an event handler for the event type
   *
   * @param event - An {@link EventType}
   * @param handler - An {@link EventHandler}, or a {@link WildcardEventHandler} if you are specified "*"
   */
  off<Key extends keyof Events>(
    event: Key | '*',
    handler: EventHandler<Events[keyof Events]> | WildcardEventHandler<Events>
  ): void

  /**
   * Invoke all handlers with the event type.
   *
   * Note Manually firing "*" handlers should be not supported
   *
   * @param event - An {@link EventType}
   * @param payload - An event payload, optional
   */
  emit<Key extends keyof Events>(event: Key, payload?: Events[keyof Events]): void
}

/**
 * Create a event emitter
 *
 * This event emitter forked and inspired from the below:
 * - original repository url: https://github.com/developit/mitt
 * - code url: https://github.com/developit/mitt/blob/master/src/index.ts
 * - author: Jason Miller (https://github.com/developit)
 *
 * @returns An event emitter, which is {@link Emittable}
 */
export function createEmitter<Events extends Record<EventType, unknown>>(): Readonly<
  Emittable<Events>
> {
  type GenericEventHandler = EventHandler<Events[keyof Events]> | WildcardEventHandler<Events>
  const events = new Map() as EventHandlerMap<Events>

  /**
   * Register an event handler.
   * This function is implemented for {@link Emittable.on}
   *
   * @param event - An {@link EventType}
   * @param handler - An {@link EventHandler}, or a {@link WildcardEventHandler} if you are specified "*"
   * @returns An {@link EventStopHandler}
   */
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
      off(event, handler)
    }
    stop[Symbol.dispose] = stop
    return stop
  }

  /**
   * Unregister an event handler.
   * This function is implemented for {@link Emittable.off}
   *
   * @param event - An {@link EventType}
   * @param handler - An {@link EventHandler}, or a {@link WildcardEventHandler} if you are specified "*"
   */
  function off<Key extends keyof Events>(event: Key | '*', handler: GenericEventHandler): void {
    const handlers: Array<GenericEventHandler> | undefined = events.get(event)
    handlers?.splice(handlers.indexOf(handler) >>> 0, 1)
  }

  /**
   * Invoke all handlers with the event type.
   * This function is implemented for {@link Emittable.emit}
   *
   * @param event - An {@link EventType}
   * @param payload - An event payload, optional
   */
  function emit<Key extends keyof Events>(event: Key, payload?: Events[keyof Events]): void {
    ;((events.get(event) || []) as EventHandlerList<Events[keyof Events]>)
      .slice()
      .map(handler => handler(payload))
    ;((events.get('*') || []) as WildcardEventHandlerList<Events>)
      .slice()
      .map(handler => handler(event, payload))
  }

  return Object.freeze({
    on,
    off,
    emit
  })
}
