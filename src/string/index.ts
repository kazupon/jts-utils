// SPDX-License-Identifier: MIT
// Modifier: kazuya kawaguchi (a.k.a. kazupon)

/**
 * pascalize string
 * @param value - a string value
 * @returns pascalized string
 */
export function pascalize(value: string): string {
  return value.replaceAll(/\w+/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase())
}
