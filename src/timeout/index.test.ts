import { describe, expect, test, vi } from 'vitest'
import { setInterval, setTimeout } from './index.ts'

describe('setTimeout', () => {
  test('resolves after delay', async () => {
    const start = Date.now()
    await setTimeout(50)
    const elapsed = Date.now() - start
    expect(elapsed).toBeGreaterThanOrEqual(40)
  })

  test('resolves with value', async () => {
    const result = await setTimeout(10, 'hello')
    expect(result).toBe('hello')
  })

  test('resolves with undefined when value is omitted', async () => {
    const result = await setTimeout(10)
    expect(result).toBeUndefined()
  })

  test('resolves with object value', async () => {
    const obj = { greeting: 'hello' }
    const result = await setTimeout(10, obj)
    expect(result).toBe(obj)
  })

  test('defaults delay to 0', async () => {
    const result = await setTimeout(undefined, 'immediate')
    expect(result).toBe('immediate')
  })

  test('rejects when signal is aborted', async () => {
    const controller = new AbortController()

    const promise = setTimeout(1000, undefined, { signal: controller.signal })
    controller.abort()

    await expect(promise).rejects.toThrow()
  })

  test('rejects immediately when signal is already aborted', async () => {
    const controller = new AbortController()
    controller.abort()

    const promise = setTimeout(1000, undefined, { signal: controller.signal })

    await expect(promise).rejects.toThrow()
  })

  test('rejects with custom abort reason', async () => {
    const controller = new AbortController()
    const reason = new Error('custom reason')

    const promise = setTimeout(1000, undefined, { signal: controller.signal })
    controller.abort(reason)

    await expect(promise).rejects.toThrow('custom reason')
  })

  test('clears internal timer on abort', async () => {
    using spy = vi.spyOn(globalThis, 'clearTimeout')
    const controller = new AbortController()

    const promise = setTimeout(1000, undefined, { signal: controller.signal })
    controller.abort()

    await expect(promise).rejects.toThrow()
    expect(spy).toHaveBeenCalled()
  })

  test('works without options', async () => {
    const result = await setTimeout(10, 42)
    expect(result).toBe(42)
  })
})

describe('setInterval', () => {
  test('yields value at each interval', async () => {
    const controller = new AbortController()
    const values: string[] = []

    for await (const v of setInterval(10, 'tick', { signal: controller.signal })) {
      values.push(v)
      if (values.length >= 3) {
        controller.abort()
      }
    }

    expect(values).toEqual(['tick', 'tick', 'tick'])
  })

  test('stops when signal is aborted', async () => {
    const controller = new AbortController()
    const handler = vi.fn()

    globalThis.setTimeout(() => controller.abort(), 25)

    for await (const v of setInterval(10, 'tick', { signal: controller.signal })) {
      handler(v)
    }

    expect(handler).toHaveBeenCalled()
    // Should have been called at least once but stopped
    const count = handler.mock.calls.length
    expect(count).toBeGreaterThanOrEqual(1)
    expect(count).toBeLessThanOrEqual(5)
  })

  test('does not yield when signal is already aborted', async () => {
    const controller = new AbortController()
    controller.abort()

    const values: unknown[] = []
    for await (const v of setInterval(10, 'tick', { signal: controller.signal })) {
      values.push(v)
    }

    expect(values).toEqual([])
  })

  test('can be stopped with break', async () => {
    const values: number[] = []
    let i = 0

    for await (const v of setInterval(10, 42)) {
      values.push(v)
      i++
      if (i >= 3) {
        break
      }
    }

    expect(values).toEqual([42, 42, 42])
  })

  test('yields undefined when value is omitted', async () => {
    const controller = new AbortController()
    const values: unknown[] = []

    for await (const v of setInterval(10, undefined, { signal: controller.signal })) {
      values.push(v)
      if (values.length >= 1) {
        controller.abort()
      }
    }

    expect(values).toEqual([undefined])
  })
})
