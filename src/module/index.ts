// SPDX-License-Identifier: MIT
// Modifier: kazuya kawaguchi (a.k.a. kazupon)

import type { Awaitable, InteropModuleDefault } from '../types/index.ts'

/**
 * resolve module with interop default
 * @param mod a module
 * @returns resolved module
 */
// eslint-disable-next-line unicorn/prevent-abbreviations
export async function interopDefault<T>(mod: Awaitable<T>): Promise<InteropModuleDefault<T>> {
  const resolved = await mod
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return (resolved as any).default || resolved
}
