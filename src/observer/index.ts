// SPDX-License-Identifier: MIT
// Modifier: kazuya kawaguchi (a.k.a. kazupon)

/**
 * State value subscribe handler
 */
export type ObservableStateSubscribeHandler<State> = (state: State) => void

/**
 * State value unsubscribe handler
 */
export type ObservableStateUnsubscribeHandler = () => void

/**
 * State value observable
 */
export interface Observable<State> {
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

    const unsubscribe = () => {
      const index = listeners.indexOf(listener)
      if (index !== -1) {
        listeners.splice(index, 1)
        _listenerCount = listeners.length
      }
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
   * TODO: ref: ECMAScript Explicit Resource Management
   * https://github.com/tc39/proposal-explicit-resource-management
   */
  function dispose() {
    _listenerCount = listeners.length = 0
  }

  return {
    get listenerCount() {
      return _listenerCount
    },
    subscribe,
    notify,
    dispose
  }
}
