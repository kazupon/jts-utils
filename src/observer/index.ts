/**
 * Observer utilities
 *
 * @example
 * ```ts
 * import { observe } from '@kazupon/jts-utils/observer'
 * ```
 *
 * @module Observer
 */

/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

/**
 * State value subscribe handler
 */
export type ObservableStateSubscribeHandler<State> = (state: State) => void

/**
 * State value unsubscribe handler
 */
export interface ObservableStateUnsubscribeHandler extends Disposable {
  (): void
}

/**
 * State value observable
 */
export interface Observable<State> extends Disposable {
  /**
   * listener count
   */
  readonly listenerCount: number
  /**
   * add state subscription
   *
   * @param listener - listener
   * @returns unsubscribe handler
   */
  subscribe(listener: ObservableStateSubscribeHandler<State>): ObservableStateUnsubscribeHandler
  /**
   * notify state value
   *
   * @param state - updated state value
   */
  notify(state: State): void
  /**
   * dispose observable
   */
  dispose(): void
}

/**
 * observe state value
 *
 * @example
 * ```ts
 * import { observe } from '@kazupon/jts-utils/observer'
 *
 * // create observable
 * const observer = observe<{ a: number }>()
 *
 * // subscribe state change
 * const unsubscribe = observer.subscribe((state) => {
 *   console.log(state)
 * })
 *
 * // notify state change
 * observer.notify({ a: 1 })
 *
 * // unsubscribe
 * unsubscribe()
 * ```
 *
 * if javascript runtime supports `Symbol.dispose`, you can use it as follows:
 *
 * @example
 * ```ts
 * import { observe } from '@kazupon/jts-utils/observer'
 *
 * // create observable with `using` syntax
 * // when the scope is exited, `observer.dispose` will be called automatically
 * using observer = observe<{ a: number }>()
 *
 * const unsubscribe1 = observer.subscribe((state) => {
 *  console.log(state)
 * })
 *
 * // subscribe with `using` syntax
 * // when the scope is exited, `unsubscribe2` will be called automatically
 * using unsubscribe2 = observer.subscribe((state) => {
 *  console.log(state)
 * })
 *
 * observer.notify({ a: 1 })
 * ```
 *
 * @returns observable state value
 */
export function observe<State>(): Readonly<Observable<State>> {
  const listeners: ObservableStateSubscribeHandler<State>[] = []
  let _listenerCount = 0

  /**
   * subscribe state change
   *
   * @param listener - listener handler
   * @returns unsubscribe handler
   */
  function subscribe(listener: ObservableStateSubscribeHandler<State>) {
    listeners.push(listener)
    _listenerCount = listeners.length

    const unsubscribe: ObservableStateUnsubscribeHandler = () => {
      const index = listeners.indexOf(listener)
      if (index !== -1) {
        listeners.splice(index, 1)
        _listenerCount = listeners.length
      }
    }
    unsubscribe[Symbol.dispose] = () => {
      unsubscribe()
    }
    return unsubscribe
  }

  /**
   * notify state change
   *
   * @param state - state value
   */
  function notify(state: State) {
    for (const listener of listeners) listener(state)
  }

  /**
   * dispose observable
   */
  function dispose() {
    _listenerCount = listeners.length = 0
  }

  return Object.freeze({
    get listenerCount() {
      return _listenerCount
    },
    subscribe,
    notify,
    dispose,
    [Symbol.dispose]() {
      dispose()
    }
  })
}
