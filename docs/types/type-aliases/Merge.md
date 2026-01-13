[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [types](../index.md) / Merge

# Type Alias: Merge\<F, S\>

```ts
type Merge<F, S> = { [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never };
```

Merge two types

## Type Parameters

| Type Parameter | Description |
| -------------- | ----------- |
| `F`            | First type  |
| `S`            | Second type |

## Example

```ts
import type { Merge } from '@kazupon/jts-utils'

type First = {
  a: number
  b: string
}
type Second = {
  b: boolean
  c: string
}
type Merged = Merge<First, Second>
// Resulting type:
// {
//   a: number
//   b: boolean
//   c: string
// }
```
