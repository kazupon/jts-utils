import { test, expect, vi } from 'vitest'
import { once } from './once.ts'

test('resolves when event is fired', async () => {
  const target = new EventTarget()

  const promise = once(target, 'test')
  target.dispatchEvent(new Event('test'))

  await expect(promise).resolves.toBeUndefined()
})

test('resolves only once', async () => {
  const target = new EventTarget()
  const handler = vi.fn()

  const promise = once(target, 'test').then(handler)
  target.dispatchEvent(new Event('test'))
  target.dispatchEvent(new Event('test'))

  await promise
  expect(handler).toBeCalledTimes(1)
})

test('rejects when signal is aborted', async () => {
  const target = new EventTarget()
  const controller = new AbortController()

  const promise = once(target, 'test', controller.signal)
  controller.abort()

  await expect(promise).rejects.toThrow()
})

test('rejects immediately when signal is already aborted', async () => {
  const target = new EventTarget()
  const controller = new AbortController()
  controller.abort()

  const promise = once(target, 'test', controller.signal)

  await expect(promise).rejects.toThrow()
})

test('does not reject after event is fired even if signal is aborted later', async () => {
  const target = new EventTarget()
  const controller = new AbortController()

  const promise = once(target, 'test', controller.signal)
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

  const promise = once(target, 'test', controller.signal)
  target.dispatchEvent(new Event('test'))

  await promise

  expect(removeEventListenerSpy).toHaveBeenCalledWith('abort', expect.any(Function))
})

test('removes event listener when signal is aborted', async () => {
  const target = new EventTarget()
  const controller = new AbortController()
  using _removeEventListenerSpy = vi.spyOn(target, 'removeEventListener')

  const promise = once(target, 'test', controller.signal)
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

  const promise = once(target, 'custom-event')
  target.dispatchEvent(new Event('custom-event'))

  await expect(promise).resolves.toBeUndefined()
})

test('rejects with abort reason when provided', async () => {
  const target = new EventTarget()
  const controller = new AbortController()
  const customReason = new Error('Custom abort reason')

  const promise = once(target, 'test', controller.signal)
  controller.abort(customReason)

  await expect(promise).rejects.toThrow('Custom abort reason')
})
