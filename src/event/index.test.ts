import { test, expect, vi } from 'vitest'
import { createEmitter } from './index.ts'

test('basic', () => {
  const handler = vi.fn()

  const emitter = createEmitter<{ foo: number }>()
  emitter.on('foo', handler)
  emitter.emit('foo', 1)

  expect(handler).toBeCalledTimes(1)
  expect(handler).toHaveBeenNthCalledWith(1, 1)

  emitter.off('foo', handler)
  emitter.emit('foo', 1)
  expect(handler).toBeCalledTimes(1)
})

test('mlutiple register', () => {
  const handler1 = vi.fn()
  const handler2 = vi.fn()

  const emitter = createEmitter<{ foo: string }>()
  emitter.on('foo', handler1)
  emitter.on('foo', handler2)
  emitter.emit('foo', 'hello')

  expect(handler1).toBeCalledTimes(1)
  expect(handler1).toHaveBeenNthCalledWith(1, 'hello')
  expect(handler2).toBeCalledTimes(1)
  expect(handler2).toHaveBeenNthCalledWith(1, 'hello')

  emitter.off('foo', handler1)
  emitter.emit('foo', 'world')

  expect(handler1).toBeCalledTimes(1)
  expect(handler2).toBeCalledTimes(2)
  expect(handler2).toHaveBeenNthCalledWith(2, 'world')
})

test('multiple event', () => {
  const handler1 = vi.fn()
  const handler2 = vi.fn()

  const emitter = createEmitter<{ foo: string; bar: { greeting: string } }>()
  emitter.on('foo', handler1)
  emitter.on('bar', handler2)
  emitter.emit('foo', 'hello')
  emitter.emit('bar', { greeting: 'hello' })

  expect(handler1).toBeCalledTimes(1)
  expect(handler1).toHaveBeenNthCalledWith(1, 'hello')
  expect(handler2).toBeCalledTimes(1)
  expect(handler2).toHaveBeenNthCalledWith(1, { greeting: 'hello' })

  emitter.off('foo', handler1)
  emitter.emit('foo', 'hello')
  emitter.emit('bar', { greeting: 'world' })

  expect(handler1).toBeCalledTimes(1)
  expect(handler2).toBeCalledTimes(2)
  expect(handler2).toHaveBeenNthCalledWith(2, { greeting: 'world' })
})

test('* event', () => {
  const handler1 = vi.fn()

  const emitter = createEmitter<{ foo: string; bar: number }>()
  emitter.on('*', handler1)
  emitter.emit('foo', 'hello')
  emitter.emit('bar', 1)

  expect(handler1).toBeCalledTimes(2)
  expect(handler1).toHaveBeenNthCalledWith(1, 'foo', 'hello')
  expect(handler1).toHaveBeenNthCalledWith(2, 'bar', 1)

  emitter.off('*', handler1)
  emitter.emit('foo', 'hello')
  emitter.emit('bar', 1)

  expect(handler1).toBeCalledTimes(2)
})

test('dispose stop handler', () => {
  const handler = vi.fn()
  const emitter = createEmitter<{ foo: string }>()

  // using block to test dispose
  {
    using _stop = emitter.on('foo', handler)
    emitter.emit('foo', 'hello')

    expect(handler).toBeCalledTimes(1)
    expect(handler).toHaveBeenNthCalledWith(1, 'hello')
  }

  emitter.emit('foo', 'world')
  expect(handler).toBeCalledTimes(1)
})
