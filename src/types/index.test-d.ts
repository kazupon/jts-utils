import { test, expectTypeOf } from 'vitest'
import type { Awaitable, InteropModuleDefault } from './index.js'

test('Awaitable', () => {
  expectTypeOf<Awaitable<number>>().toEqualTypeOf<number | Promise<number>>()
})

test('InteropModuleDefault', () => {
  expectTypeOf<InteropModuleDefault<number>>().toEqualTypeOf<number>()
  expectTypeOf<InteropModuleDefault<{ default: number }>>().toEqualTypeOf<number>()
})
