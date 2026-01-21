[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [types](../index.md) / LastInUnion

# Type Alias: LastInUnion\<U\>

```ts
type LastInUnion<U> =
  UnionToIntersection<U extends unknown ? (x) => 0 : never> extends (x) => 0 ? L : never
```

Extract the last element in a union

## Type Parameters

| Type Parameter | Description |
| -------------- | ----------- |
| `U`            | Union type  |

## Example

```ts
import type { LastInUnion } from '@kazupon/jts-utils'

type MyUnion = { a: string } | { b: number } | { c: boolean }
type LastElement = LastInUnion<MyUnion>
// Resulting type:
// {
//   c: boolean
// }
```
