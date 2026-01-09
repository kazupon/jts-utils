import { describe, test, expect } from 'vitest'
import { abortError, throwIfAborted } from './index.ts'

describe('abortError', () => {
  test('returns the reason if the signal has a reason', () => {
    const controller = new AbortController()
    controller.abort()
    const error = abortError(controller.signal)
    expect(error).toBe(controller.signal.reason)
    expect(error).toBeInstanceOf(DOMException)
    expect((error as DOMException).name).toBe('AbortError')
    expect((error as DOMException).message).toBe('This operation was aborted')
  })

  test('returns a new DOMException if the signal has no reason', () => {
    const controller = new AbortController()

    const error = abortError(controller.signal, {
      message: 'Custom abort message',
      name: 'CustomAbortError'
    })
    expect(error).toBeInstanceOf(DOMException)
    expect((error as DOMException).message).toBe('Custom abort message')
    expect((error as DOMException).name).toBe('CustomAbortError')
  })

  test('returns a new DOMException with default values if no options are provided', () => {
    const controller = new AbortController()

    const error = abortError(controller.signal)
    expect(error).toBeInstanceOf(DOMException)
    expect((error as DOMException).message).toBe('Aborted')
    expect((error as DOMException).name).toBe('AbortError')
  })
})

describe('throwIfAborted', () => {
  test('throws an abort error if the signal is aborted', () => {
    const controller = new AbortController()
    controller.abort()

    expect(() => throwIfAborted(controller.signal)).toThrow(DOMException)
  })

  test('does not throw if the signal is not aborted', () => {
    const controller = new AbortController()

    expect(() => throwIfAborted(controller.signal)).not.toThrow()
  })

  test('does not throw if no signal is provided', () => {
    expect(() => throwIfAborted()).not.toThrow()
  })
})
