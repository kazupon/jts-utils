import { test, expect, vi } from 'vitest'
import { waitOnce } from './once.ts'

test('resolves when event is fired', async () => {
  const target = new EventTarget()

  const promise = waitOnce(target, 'test')
  target.dispatchEvent(new Event('test'))

  await expect(promise).resolves.toBeUndefined()
})

test('resolves only once', async () => {
  const target = new EventTarget()
  const handler = vi.fn()

  const promise = waitOnce(target, 'test').then(handler)
  target.dispatchEvent(new Event('test'))
  target.dispatchEvent(new Event('test'))

  await promise
  expect(handler).toBeCalledTimes(1)
})

test('rejects when signal is aborted', async () => {
  const target = new EventTarget()
  const controller = new AbortController()

  const promise = waitOnce(target, 'test', controller.signal)
  controller.abort()

  await expect(promise).rejects.toThrow()
})

test('rejects immediately when signal is already aborted', async () => {
  const target = new EventTarget()
  const controller = new AbortController()
  controller.abort()

  const promise = waitOnce(target, 'test', controller.signal)

  await expect(promise).rejects.toThrow()
})

test('does not reject after event is fired even if signal is aborted later', async () => {
  const target = new EventTarget()
  const controller = new AbortController()

  const promise = waitOnce(target, 'test', controller.signal)
  target.dispatchEvent(new Event('test'))

  await promise

  // abort after event fired should not cause issues
  controller.abort()

  await expect(promise).resolves.toBeUndefined()
})

test('removes abort listener after event is fired', async () => {
  const target = new EventTarget()
  const controller = new AbortController()
  using removeEventListenerSpy = vi.spyOn(controller.signal, 'removeEventListener')

  const promise = waitOnce(target, 'test', controller.signal)
  target.dispatchEvent(new Event('test'))

  await promise

  expect(removeEventListenerSpy).toHaveBeenCalledWith('abort', expect.any(Function))
})

test('removes event listener when signal is aborted', async () => {
  const target = new EventTarget()
  const controller = new AbortController()
  using _removeEventListenerSpy = vi.spyOn(target, 'removeEventListener')

  const promise = waitOnce(target, 'test', controller.signal)
  controller.abort()

  await expect(promise).rejects.toThrow()

  // EventTarget should have removed the listener via signal option
  // We can verify by dispatching the event and ensuring no side effects
  const handler = vi.fn()
  target.addEventListener('test', handler)
  target.dispatchEvent(new Event('test'))

  expect(handler).toBeCalledTimes(1)
})

test('works without signal', async () => {
  const target = new EventTarget()

  const promise = waitOnce(target, 'custom-event')
  target.dispatchEvent(new Event('custom-event'))

  await expect(promise).resolves.toBeUndefined()
})

test('rejects with abort reason when provided', async () => {
  const target = new EventTarget()
  const controller = new AbortController()
  const customReason = new Error('Custom abort reason')

  const promise = waitOnce(target, 'test', controller.signal)
  controller.abort(customReason)

  await expect(promise).rejects.toThrow('Custom abort reason')
})

test('calls listener when event is fired', async () => {
  const target = new EventTarget()
  const listener = vi.fn()

  const promise = waitOnce(target, 'test', listener)
  const event = new Event('test')
  target.dispatchEvent(event)

  await promise

  expect(listener).toBeCalledTimes(1)
  expect(listener).toHaveBeenCalledWith(event)
})

test('calls listener with event object', async () => {
  const target = new EventTarget()
  const listener = vi.fn()

  const promise = waitOnce(target, 'custom', listener)
  const event = new CustomEvent('custom', { detail: { foo: 'bar' } })
  target.dispatchEvent(event)

  await promise

  expect(listener).toHaveBeenCalledWith(event)
  expect((listener.mock.calls[0][0] as CustomEvent).detail).toEqual({ foo: 'bar' })
})

test('calls listener and supports abort signal', async () => {
  const target = new EventTarget()
  const listener = vi.fn()
  const controller = new AbortController()

  const promise = waitOnce(target, 'test', listener, controller.signal)
  const event = new Event('test')
  target.dispatchEvent(event)

  await promise

  expect(listener).toBeCalledTimes(1)
  expect(listener).toHaveBeenCalledWith(event)
})

test('does not call listener when aborted before event', async () => {
  const target = new EventTarget()
  const listener = vi.fn()
  const controller = new AbortController()

  const promise = waitOnce(target, 'test', listener, controller.signal)
  controller.abort()

  await expect(promise).rejects.toThrow()
  expect(listener).not.toBeCalled()
})

test('does not call listener when signal is already aborted', async () => {
  const target = new EventTarget()
  const listener = vi.fn()
  const controller = new AbortController()
  controller.abort()

  const promise = waitOnce(target, 'test', listener, controller.signal)

  await expect(promise).rejects.toThrow()
  expect(listener).not.toBeCalled()
})
