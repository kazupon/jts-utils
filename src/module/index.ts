/**
 * Module utilities
 *
 * @example
 * ```ts
 * import { interopDefault } from '@kazupon/jts-utils/module'
 * ```
 *
 * @module module
 *
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

import type { Awaitable, InteropModuleDefault } from '../types/index.ts'

/**
 * resolve module with interop default for CommonJS and ES Modules
 *
 * @param mod - a module
 * @returns resolved module
 */
export async function interopDefault<T>(mod: Awaitable<T>): Promise<InteropModuleDefault<T>> {
  const resolved = await mod
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- ignore generic case
  return ((resolved as any).default || resolved) as Promise<InteropModuleDefault<T>>
}
