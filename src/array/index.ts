/**
 * convert to array
 * @param value a value
 * @returns convrted array
 */
export function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}