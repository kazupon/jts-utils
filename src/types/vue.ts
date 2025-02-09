// SPDX-License-Identifier: MIT
// Modifier: kazuya kawaguchi (a.k.a. kazupon)

import type { Ref } from '@vue/reactivity'

/**
 * Define T or {@link Ref<T>} type
 */
export type MaybeRef<T = any> = T | Ref<T> // eslint-disable-line @typescript-eslint/no-explicit-any, unicorn/prevent-abbreviations

/**
 * Define T or {@link Ref<T>} or getter function type
 */
export type MaybeRefOrGetter<T = any> = MaybeRef<T> | (() => T) // eslint-disable-line @typescript-eslint/no-explicit-any, unicorn/prevent-abbreviations
