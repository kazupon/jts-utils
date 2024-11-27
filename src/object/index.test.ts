import { expect, test } from 'vitest'
import { create, isObject, isPlainObject, toRawType, toTypeString } from './index.ts'

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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore -- for test
  expect(o1.prototype).toBe(undefined)
  expect(o1).toEqual({})

  // specify null
  const o2 = create(null) // eslint-disable-line unicorn/no-null
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
