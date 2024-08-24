import { test, expect } from 'vitest'
import { pascalize } from './index.js'

test('pascalize', () => {
  expect(pascalize('hello')).toBe('Hello')
  expect(pascalize('hello world')).toBe('Hello World')
  expect(pascalize('hello-world')).toBe('Hello-World')
})
