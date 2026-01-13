[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [types](../index.md) / UnionToIntersection

# Type Alias: UnionToIntersection\<U\>

```ts
type UnionToIntersection<U> = U extends unknown ? (argument) => 0 : never extends (argument) => 0 ? I : never;
```

Convert a union to intersection

## Type Parameters

| Type Parameter | Description |
| -------------- | ----------- |
| `U`            | Union type  |

## Example

```ts
import type { UnionToIntersection } from '@kazupon/jts-utils'

type Union = { a: string } | { b: number }
type Intersection = UnionToIntersection<Union>
// Resulting type:
// {
//   a: string
// } & {
//   b: number
// }
```
