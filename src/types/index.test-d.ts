import { expectTypeOf, test } from 'vitest'
import type {
  Awaitable,
  InteropModuleDefault,
  IsNever,
  IsNull,
  IsObject,
  IsPlainObject,
  LastInUnion,
  Merge,
  UnionToIntersection,
  UnionToTuple
} from './index.ts'

class Foo {}

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

test('Merge', () => {
  expectTypeOf<Merge<{ a: string }, { b: number }>>().toEqualTypeOf<{ a: string; b: number }>()
})

test('IsNever', () => {
  expectTypeOf<IsNever<never>>().toEqualTypeOf<true>()
  expectTypeOf<IsNever<number>>().toEqualTypeOf<false>()
})

test('IsNull', () => {
  expectTypeOf<IsNull<null>>().toEqualTypeOf<true>()
  expectTypeOf<IsNull<number>>().toEqualTypeOf<false>()
})

test('IsObject', () => {
  expectTypeOf<IsObject<object>>().toEqualTypeOf<true>()
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  expectTypeOf<IsObject<{}>>().toEqualTypeOf<true>()
  expectTypeOf<IsObject<{ a: number }>>().toEqualTypeOf<true>()
  expectTypeOf<IsObject<Foo>>().toEqualTypeOf<true>()
  expectTypeOf<IsObject<string[]>>().toEqualTypeOf<true>() // NOTE: Array is object

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  expectTypeOf<IsObject<Function>>().toEqualTypeOf<false>()
  expectTypeOf<IsObject<number>>().toEqualTypeOf<false>()
  expectTypeOf<IsObject<string>>().toEqualTypeOf<false>()
  expectTypeOf<IsObject<null>>().toEqualTypeOf<false>()
  expectTypeOf<IsObject<undefined>>().toEqualTypeOf<false>()
  expectTypeOf<IsObject<() => void>>().toEqualTypeOf<false>()
})

test('IsPlainObject', () => {
  expectTypeOf<IsPlainObject<object>>().toEqualTypeOf<true>()
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  expectTypeOf<IsPlainObject<{}>>().toEqualTypeOf<true>()
  expectTypeOf<IsPlainObject<{ a: number }>>().toEqualTypeOf<true>()
  expectTypeOf<IsPlainObject<Foo>>().toEqualTypeOf<true>()

  expectTypeOf<IsPlainObject<string[]>>().toEqualTypeOf<false>() // NOTE: Array is not object
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  expectTypeOf<IsPlainObject<Function>>().toEqualTypeOf<false>()
  expectTypeOf<IsPlainObject<string>>().toEqualTypeOf<false>()
  expectTypeOf<IsPlainObject<null>>().toEqualTypeOf<false>()
  expectTypeOf<IsPlainObject<undefined>>().toEqualTypeOf<false>()
  expectTypeOf<IsPlainObject<() => void>>().toEqualTypeOf<false>()
})
