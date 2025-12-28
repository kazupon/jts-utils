[**@kazupon/jts-utils**](../index.md)

---

[@kazupon/jts-utils](../index.md) / Prettify

# Type Alias: Prettify\<T\>

```ts
type Prettify<T> = { [K in keyof T]: T[K] } & object;
```

Prettify a type by flattening its structure.

## Type Parameters

| Type Parameter | Description                |
| -------------- | -------------------------- |
| `T`            | The type to be prettified. |

## Example

```ts
import type { Prettify, Overwrite } from '@kazupon/jts-utils'

type Original = {
  a: number
  b: string
}
type Update = {
  a: string
  b: boolean
}
type Overwritten = Overwrite<Original, Update>
type Prettified = Prettify<Overwritten>
// Resulting type:
// {
//   a: string
//   b: boolean
// }
```
