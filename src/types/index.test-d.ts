import { test, expectTypeOf } from 'vitest'
import type {
  Awaitable,
  InteropModuleDefault,
  UnionToIntersection,
  LastInUnion,
  UnionToTuple,
  IsNever
} from './index.ts'

test('Awaitable', () => {
  expectTypeOf<Awaitable<number>>().toEqualTypeOf<number | Promise<number>>()
})

test('InteropModuleDefault', () => {
  expectTypeOf<InteropModuleDefault<number>>().toEqualTypeOf<number>()
  expectTypeOf<InteropModuleDefault<{ default: number }>>().toEqualTypeOf<number>()
})

test('UnionToIntersection', () => {
  expectTypeOf<UnionToIntersection<{ a: string } | { b: number }>>().toEqualTypeOf<
    { a: string } & { b: number }
  >()
})

test('LastInUnion', () => {
  expectTypeOf<LastInUnion<{ a: string } | { b: number }>>().toEqualTypeOf<{ b: number }>()
})

test('UnionToTuple', () => {
  expectTypeOf<UnionToTuple<{ a: string } | { b: number }>>().toEqualTypeOf<
    [{ a: string }, { b: number }]
  >()
})

test('IsNever', () => {
  expectTypeOf<IsNever<never>>().toEqualTypeOf<true>()
  expectTypeOf<IsNever<number>>().toEqualTypeOf<false>()
})
