import { test, expect } from 'vitest'
import { interopDefault } from './index.js'

test('interopDefault', async () => {
  const module_ = await interopDefault(import('@kazupon/eslint-config'))
  expect(module_).toBeDefined()
})
