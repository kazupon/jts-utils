import { expect, expectTypeOf, test, vi } from 'vitest'
import { Emitter } from './index.ts'

test('basic', () => {
  const handler = vi.fn()

  const emitter = Emitter<{ foo: number }>()
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

  const emitter = Emitter<{ foo: string }>()
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

  const emitter = Emitter<{ foo: string; bar: { greeting: string }; baz: undefined }>()
  emitter.on('foo', handler1)
  emitter.on('bar', handler2)
  emitter.on('bar', payload => {
    expectTypeOf(payload).toEqualTypeOf<{ greeting: string }>()
  })
  emitter.on('baz', () => {})
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
  const handler2 = vi.fn()

  const emitter = Emitter<{ foo: string; bar: number }>()
  emitter.on('*', handler1)
  emitter.emit('foo', 'hello')
  emitter.emit('bar', 1)

  expect(handler1).not.toBeCalled()

  const emitter2 = Emitter<{ foo: string; bar: number }>({ disableWildcard: false })
  emitter2.on('*', handler2)
  emitter2.emit('foo', 'hello')
  emitter2.emit('bar', 1)
  expect(handler2).toBeCalledTimes(2)
  expect(handler2).toHaveBeenNthCalledWith(1, 'foo', 'hello')
  expect(handler2).toHaveBeenNthCalledWith(2, 'bar', 1)

  emitter2.off('*', handler2)
})

test('typecheck', () => {
  const emitter = Emitter<{ foo: string; bar: { greeting: string }; baz: undefined }>()
  emitter.on('foo', payload => {
    expectTypeOf(payload).toEqualTypeOf<string>()
  })
  emitter.on('bar', payload => {
    expectTypeOf(payload).toEqualTypeOf<{ greeting: string }>()
  })
  emitter.on('baz', () => {})
  emitter.emit('foo', 'hello')
  emitter.emit('bar', { greeting: 'hello' })
  emitter.emit('baz')
})

test('dispose stop handler', () => {
  const handler = vi.fn()
  const emitter = Emitter<{ foo: string }>()

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

test('once basic', () => {
  const handler = vi.fn()

  const emitter = Emitter<{ foo: number }>()
  emitter.once('foo', handler)
  emitter.emit('foo', 1)
  emitter.emit('foo', 2)

  expect(handler).toBeCalledTimes(1)
  expect(handler).toHaveBeenNthCalledWith(1, 1)
})

test('once manual stop', () => {
  const handler = vi.fn()

  const emitter = Emitter<{ foo: number }>()
  const stop = emitter.once('foo', handler)

  stop()
  emitter.emit('foo', 1)

  expect(handler).not.toBeCalled()
})

test('once * event', () => {
  const handler = vi.fn()

  const emitter = Emitter<{ foo: string; bar: number }>({ disableWildcard: false })
  emitter.once('*', handler)
  emitter.emit('foo', 'hello')
  emitter.emit('bar', 1)

  expect(handler).toBeCalledTimes(1)
  expect(handler).toHaveBeenNthCalledWith(1, 'foo', 'hello')
})

test('once typecheck', () => {
  const emitter = Emitter<{ foo: string; bar: { greeting: string }; baz: undefined }>()
  emitter.once('foo', payload => {
    expectTypeOf(payload).toEqualTypeOf<string>()
  })
  emitter.once('bar', payload => {
    expectTypeOf(payload).toEqualTypeOf<{ greeting: string }>()
  })
  emitter.once('baz', () => {})
  emitter.emit('foo', 'hello')
  emitter.emit('bar', { greeting: 'hello' })
  emitter.emit('baz')
})

test('once multiple handlers', () => {
  const handler1 = vi.fn()
  const handler2 = vi.fn()

  const emitter = Emitter<{ foo: string }>()
  emitter.once('foo', handler1)
  emitter.once('foo', handler2)
  emitter.emit('foo', 'hello')
  emitter.emit('foo', 'world')

  expect(handler1).toBeCalledTimes(1)
  expect(handler2).toBeCalledTimes(1)
})

test('once mixed with on', () => {
  const onHandler = vi.fn()
  const onceHandler = vi.fn()

  const emitter = Emitter<{ foo: string }>()
  emitter.on('foo', onHandler)
  emitter.once('foo', onceHandler)

  emitter.emit('foo', 'first')
  emitter.emit('foo', 'second')

  expect(onHandler).toBeCalledTimes(2)
  expect(onceHandler).toBeCalledTimes(1)
  expect(onceHandler).toHaveBeenNthCalledWith(1, 'first')
})

test('dispose emitter', () => {
  const handler = vi.fn()
  const emitter = Emitter<{ foo: string }>()

  emitter.on('foo', handler)
  emitter.emit('foo', 'hello')
  expect(handler).toBeCalledTimes(1)

  emitter[Symbol.dispose]()
  emitter.emit('foo', 'world')
  expect(handler).toBeCalledTimes(1) // 呼ばれない
})

test('dispose emitter with using', () => {
  const handler = vi.fn()

  {
    using emitter = Emitter<{ foo: string }>()
    emitter.on('foo', handler)
    emitter.emit('foo', 'hello')
    expect(handler).toBeCalledTimes(1)
  }
  // スコープを抜けると自動的に dispose される
})
