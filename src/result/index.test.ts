import { describe, expect, expectTypeOf, test } from 'vitest'
import { ok, err, isOk, isErr, unwrap } from './index.ts'

import type { Err, Ok, Result } from './index.ts'

describe('Ok', () => {
  test('correct type structure', () => {
    expectTypeOf<Ok<number>>().toEqualTypeOf<{ ok: true; value: number }>()
  })

  test('Ok object', () => {
    const result: Ok<string> = { ok: true, value: 'success' }
    expect(result.ok).toBe(true)
    expect(result.value).toBe('success')
  })
})

describe('Err', () => {
  test('correct type structure', () => {
    expectTypeOf<Err<string>>().toEqualTypeOf<{ ok: false; error: string }>()
    expectTypeOf<Err<Error>>().toEqualTypeOf<{ ok: false; error: Error }>()
  })

  test('Err object with Error', () => {
    const result: Err<Error> = { ok: false, error: new Error('failure') }
    expect(result.ok).toBe(false)
    expect(result.error).toBeInstanceOf(Error)
    expect(result.error.message).toBe('failure')
  })

  test('Err object with string', () => {
    const result: Err<string> = { ok: false, error: 'failure' }
    expect(result.ok).toBe(false)
    expect(result.error).toBe('failure')
  })
})

describe('Result', () => {
  test('Ok type', () => {
    const result: Result<number, string> = { ok: true, value: 42 }
    expect(result.ok).toBe(true)
    expect(result.value).toBe(42)
    const voidResult: Result = { ok: true, value: undefined }
    expect(voidResult.ok).toBe(true)
    expect(voidResult.value).toBeUndefined()
  })

  test('Err type', () => {
    const result: Result<number, string> = {
      ok: false,
      error: 'error occurred'
    }
    expect(result.ok).toBe(false)
    expect(result.error).toBe('error occurred')
  })
})

test('ok', () => {
  const result = ok(100)
  expect(result).toEqual({ ok: true, value: 100 })
  const voidResult = ok()
  expect(voidResult).toEqual({ ok: true, value: undefined })
})

test('err', () => {
  const resultStr = err('An error')
  expect(resultStr).toEqual({ ok: false, error: 'An error' })
  const errObj = new Error('Something went wrong')
  const resultErr = err(errObj)
  expect(resultErr).toEqual({ ok: false, error: errObj })
})

test('isOk', () => {
  const successResult: Result<number, string> = { ok: true, value: 10 }
  const failureResult: Result<number, string> = { ok: false, error: 'error' }

  expect(isOk(successResult)).toBe(true)
  expect(isOk(failureResult)).toBe(false)
})

test('isErr', () => {
  const successResult: Result<number, string> = { ok: true, value: 10 }
  const failureResult: Result<number, string> = { ok: false, error: 'error' }
  expect(isErr(successResult)).toBe(false)
  expect(isErr(failureResult)).toBe(true)
})

test('unwrap', () => {
  const successResult: Result<string, string> = { ok: true, value: 'data' }
  const failureResult: Result<string, string> = {
    ok: false,
    error: 'error occurred'
  }

  expect(unwrap(successResult)).toBe('data')
  expect(() => unwrap(failureResult)).toThrow('error occurred')
})
