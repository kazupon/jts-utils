import { test, expect } from 'vitest'
import { toArray } from './index.ts'

test('toArray', () => {
  expect(toArray(1)).toEqual([1])
  expect(toArray([1])).toEqual([1])
})
