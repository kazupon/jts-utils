import { test, expect } from 'vitest'
import { interopDefault } from './module.js'

test('interopDefault', async () => {
  const module_ = await interopDefault(import('@kazupon/eslint-config'))
  expect(module_).toBeDefined()
})
