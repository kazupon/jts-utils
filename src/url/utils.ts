/**
 * Utilities for URL handling
 */

/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

const _globalThis = globalThis as any

/**
 * Whether the current platform is Windows
 *
 * Detection is runtime-agnostic, supporting Deno, Node.js/Bun, and browsers.
 */
export const isWindows: boolean = (() => {
  // Deno
  if (_globalThis.Deno?.build?.os) {
    return _globalThis.Deno.build.os === 'windows'
  }
  // Node.js / Bun
  if (typeof process !== 'undefined' && process.platform) {
    return process.platform === 'win32'
  }
  // Browser
  if (typeof navigator !== 'undefined' && navigator.userAgent) {
    return navigator.userAgent.includes('Windows')
  }
  return false
})()
