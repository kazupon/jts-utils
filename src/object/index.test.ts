import { describe, expect, test } from 'vitest'
import {
  create,
  getOwn,
  hasOwn,
  isObject,
  isPlainObject,
  toRawType,
  toTypeString
} from './index.ts'

class Foo {
  a = 1
}

test('isObject', () => {
  expect(isObject({})).toBe(true)
  expect(isObject(new Foo())).toBe(true)
  expect(isObject([])).toBe(true) // NOTE: array is object

  // eslint-disable-next-line unicorn/no-null
  expect(isObject(null)).toBe(false)
  // eslint-disable-next-line unicorn/no-useless-undefined
  expect(isObject(undefined)).toBe(false)
  expect(isObject(1)).toBe(false)
  expect(isObject(true)).toBe(false)
  expect(isObject(() => {})).toBe(false)
  expect(isObject(isObject)).toBe(false)
  expect(isObject('string')).toBe(false)
})

test('isPlainObject', () => {
  expect(isPlainObject({})).toBe(true)
  expect(isPlainObject(new Foo())).toBe(true)

  expect(isPlainObject([])).toBe(false) // NOTE: array is not object
  // eslint-disable-next-line unicorn/no-null
  expect(isPlainObject(null)).toBe(false)
  // eslint-disable-next-line unicorn/no-useless-undefined
  expect(isPlainObject(undefined)).toBe(false)
  expect(isPlainObject(1)).toBe(false)
  expect(isPlainObject(true)).toBe(false)
  expect(isPlainObject(() => {})).toBe(false)
  expect(isPlainObject(isPlainObject)).toBe(false)
  expect(isPlainObject('string')).toBe(false)
})

test('toTypeString', () => {
  expect(toTypeString({})).toBe('[object Object]')
  expect(toTypeString([])).toBe('[object Array]')
  expect(toTypeString(new Foo())).toBe('[object Object]')
  // eslint-disable-next-line unicorn/no-null
  expect(toTypeString(null)).toBe('[object Null]')
  // eslint-disable-next-line unicorn/no-useless-undefined
  expect(toTypeString(undefined)).toBe('[object Undefined]')
  expect(toTypeString(1)).toBe('[object Number]')
  expect(toTypeString(BigInt(1))).toBe('[object BigInt]')
  expect(toTypeString(true)).toBe('[object Boolean]')
  expect(toTypeString(() => {})).toBe('[object Function]')
  expect(toTypeString(isObject)).toBe('[object Function]')
  expect(toTypeString('string')).toBe('[object String]')
  expect(toTypeString(Symbol('symbol'))).toBe('[object Symbol]')
  expect(toTypeString(new Promise(() => {}))).toBe('[object Promise]')
  expect(toTypeString(new Error('error'))).toBe('[object Error]')
  expect(toTypeString(new Date())).toBe('[object Date]')
  expect(toTypeString(/regexp/)).toBe('[object RegExp]')
  expect(toTypeString(new Map())).toBe('[object Map]')
  expect(toTypeString(new Set())).toBe('[object Set]')
  expect(toTypeString(new WeakMap())).toBe('[object WeakMap]')
  expect(toTypeString(new WeakSet())).toBe('[object WeakSet]')
  expect(toTypeString(new ArrayBuffer(2))).toBe('[object ArrayBuffer]')
  expect(toTypeString(new Int8Array(2))).toBe('[object Int8Array]')
})

test('toRawType', () => {
  expect(toRawType({})).toBe('Object')
  expect(toRawType([])).toBe('Array')
})

test('create', () => {
  // default
  const o1 = create()

  // @ts-ignore -- for test
  expect(o1.prototype).toBe(undefined)
  expect(o1).toEqual({})

  // specify null
  const o2 = create(null) // eslint-disable-line unicorn/no-null

  // @ts-ignore -- for test
  expect(o2.prototype).toBe(undefined)
  expect(o2).toEqual({})
  expect(Object.hasOwn(o2, 'a')).toBe(false)

  // specify prototype
  const o3 = create({ a: 1, b: '2' })
  expect(o3.a).toBe(1)
  expect(o3.b).toBe('2')
  expect(o3.toString()).toBe('[object Object]') // inehrited from Object.prototype
  expect(o3).toEqual({})
  expect(Object.hasOwn(o3, 'a')).toBe(false)
  expect(Object.hasOwn(o3, 'b')).toBe(false)
})

describe('hasOwn', () => {
  test('string', () => {
    const o = { a: 1 }
    expect(hasOwn(o, 'a')).toBe(true)
    expect(hasOwn(o, 'b')).toBe(false)

    const c = new Foo()
    expect(hasOwn(c, 'a')).toBe(true)
    expect(hasOwn(c, 'b')).toBe(false)

    const Bar = class Bar extends Foo {
      b = '2'
    }
    const b = new Bar()
    expect(hasOwn(b, 'a')).toBe(true)
    expect(hasOwn(b, 'b')).toBe(true)
  })

  test('array', () => {
    // array
    const a = [1, 2]
    expect(hasOwn(a, '0')).toBe(true)
    expect(hasOwn(a, '1')).toBe(true)
    expect(hasOwn(a, '2')).toBe(false)
    expect(hasOwn(a, 0)).toBe(true)
  })

  test('symbol', () => {
    // symbol
    const symbolA = Symbol('a')
    const symbolB = Symbol('b')

    const s = { [symbolA]: 1 }
    expect(hasOwn(s, symbolA)).toBe(true)
    expect(hasOwn(s, symbolB)).toBe(false)
  })
})

describe('getOwn', () => {
  test('string', () => {
    const o = { a: 1 }
    expect(getOwn(o, 'a')).toBe(1)
    // @ts-ignore -- Ignore error for test
    expect(getOwn(o, 'b')).toBe(undefined)
  })

  test('array', () => {
    // array
    const a = [1, 2]
    expect(getOwn(a, 0)).toBe(1)
    expect(getOwn(a, 1)).toBe(2)
    expect(getOwn(a, 2)).toBe(undefined)
    // @ts-ignore -- Ignore error for test
    expect(getOwn(a, '0')).toBe(1)
  })

  test('symbol', () => {
    // symbol
    const symbolA = Symbol('a')
    const symbolB = Symbol('b')

    const s = { [symbolA]: 1 }
    expect(getOwn(s, symbolA)).toBe(1)
    // @ts-ignore -- Ignore error for test
    expect(getOwn(s, symbolB)).toBe(undefined)
  })
})
