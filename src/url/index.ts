/**
 * URL Utilities
 *
 * @example
 * ```ts
 * import { fileURLToPath, pathToFileURL } from '@kazupon/jts-utils/url'
 * ```
 *
 * @module url
 */

/**
 * @license MIT
 * @author kazuya kawaguchi (a.k.a. kazupon)
 */

import { isWindows } from './utils.ts'

/**
 * Convert a file URL to a file path
 *
 * @param url - A file URL string or URL object
 * @returns The file path
 * @throws {TypeError} If the URL is not a file URL
 *
 * @example
 * ```ts
 * fileURLToPath('file:///foo/bar/test.js')
 * // => '/foo/bar/test.js'
 *
 * fileURLToPath(new URL('file:///foo/bar/test.js'))
 * // => '/foo/bar/test.js'
 * ```
 */
export function fileURLToPath(url: string | URL): string {
  const urlObj = typeof url === 'string' ? new URL(url) : url

  if (urlObj.protocol !== 'file:') {
    throw new TypeError('The URL must be of scheme file')
  }

  let pathname = decodeURIComponent(urlObj.pathname)

  // Handle Windows drive letters (e.g., /C:/path -> C:/path)
  if (isWindows && pathname.length >= 3 && pathname[0] === '/' && pathname[2] === ':') {
    pathname = pathname.slice(1)
  }

  return pathname
}

/**
 * Convert a file path to a file URL
 *
 * @param path - A file path
 * @returns A URL object representing the file URL
 *
 * @example
 * ```ts
 * pathToFileURL('/foo/bar/test.js')
 * // => URL { href: 'file:///foo/bar/test.js' }
 *
 * pathToFileURL('/foo/bar/test file.js')
 * // => URL { href: 'file:///foo/bar/test%20file.js' }
 * ```
 */
export function pathToFileURL(path: string): URL {
  let normalizedPath = path

  // Ensure leading slash for relative paths
  if (!normalizedPath.startsWith('/')) {
    normalizedPath = '/' + normalizedPath
  }

  // On Windows, convert backslashes to forward slashes
  if (isWindows) {
    normalizedPath = normalizedPath.replace(/\\/g, '/')
  }

  return new URL('file://' + normalizedPath)
}
