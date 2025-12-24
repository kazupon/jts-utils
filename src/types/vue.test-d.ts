import { expectTypeOf, test } from 'vitest'

import type { Ref } from '@vue/reactivity'
import type { MaybeRef, MaybeRefOrGetter } from './vue.ts'

test('MaybeRef', () => {
  expectTypeOf<MaybeRef<number>>().toEqualTypeOf<number | Ref<number>>()
})

test('MaybeRefOrGetter', () => {
  expectTypeOf<MaybeRefOrGetter<number>>().toEqualTypeOf<number | Ref<number> | (() => number)>()
})
