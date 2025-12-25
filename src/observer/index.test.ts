import { vi, expect, test } from 'vitest'
import { observe } from './index.ts'

interface State {
  a: number
  obj?: {
    foo: string
  }
}

test('basic', () => {
  const observer = observe<State>()

  const listener = vi.fn()
  const unsubscribe = observer.subscribe(listener)

  expect(observer.listenerCount).toBe(1)

  // call notify first time
  observer.notify({ a: 1 })

  expect(listener).toHaveBeenCalledTimes(1)
  expect(listener.mock.calls[0][0]).toEqual({ a: 1 })

  // call notify 2nd time
  observer.notify({ a: 2, obj: { foo: 'bar' } })

  expect(listener).toHaveBeenCalledTimes(2)

  expect(listener.mock.calls[1][0]).toEqual({ a: 2, obj: { foo: 'bar' } })

  // call notify, when it's unsubscribed
  unsubscribe()
  observer.notify({ a: 3 })

  expect(observer.listenerCount).toBe(0)
  expect(listener).toHaveBeenCalledTimes(2)
})

test('multiple subscribers', () => {
  const observer = observe<State>()

  const listener1 = vi.fn()
  const listener2 = vi.fn()

  const unsubscribe1 = observer.subscribe(listener1)
  const unsubscribe2 = observer.subscribe(listener2)

  expect(observer.listenerCount).toBe(2)

  // call notify first time
  observer.notify({ a: 1 })

  expect(listener1).toHaveBeenCalledTimes(1)
  expect(listener2).toHaveBeenCalledTimes(1)

  expect(listener1.mock.calls[0][0]).toEqual({ a: 1 })

  expect(listener2.mock.calls[0][0]).toEqual({ a: 1 })

  // unsubscribe listener1 and call notify 2nd time
  unsubscribe1()
  observer.notify({ a: 3 })

  expect(observer.listenerCount).toBe(1)
  expect(listener1).toHaveBeenCalledTimes(1)
  expect(listener2).toHaveBeenCalledTimes(2)

  expect(listener2.mock.calls[1][0]).toEqual({ a: 3 })

  // remaining listener also unsubscribe and call notify 3rd time
  unsubscribe2()
  observer.notify({ a: 2, obj: { foo: 'bar' } })

  expect(observer.listenerCount).toBe(0)
  expect(listener1).toHaveBeenCalledTimes(1)
  expect(listener2).toHaveBeenCalledTimes(2)
})

test('unsubscribe with using syntax', () => {
  const observer = observe<State>()

  const listener = vi.fn()

  {
    using _unsubscribe = observer.subscribe(listener)
    observer.notify({ a: 1 })
    expect(listener).toHaveBeenCalledTimes(1)
  }

  observer.notify({ a: 2 })
  expect(listener).toHaveBeenCalledTimes(1)
})

test('unregister subscribers with using syntax', () => {
  let o: ReturnType<typeof observe<State>> | undefined
  {
    using observer = observe<State>()
    o = observer
    const listener1 = vi.fn()
    const listener2 = vi.fn()
    observer.subscribe(listener1)
    observer.subscribe(listener2)
  }
  expect(o?.listenerCount).toBe(0)
})

test('dispose', () => {
  const observer = observe<State>()

  const listener1 = vi.fn()
  const listener2 = vi.fn()

  const unsubscribe1 = observer.subscribe(listener1)
  const unsubscribe2 = observer.subscribe(listener2)

  expect(observer.listenerCount).toBe(2)

  // remove all listeners
  observer.dispose()

  expect(observer.listenerCount).toBe(0)
  // check error does not occur, it has already been disposed
  expect(() => {
    unsubscribe1()
  }).not.toThrow()
  expect(() => {
    unsubscribe2()
  }).not.toThrow()
})
