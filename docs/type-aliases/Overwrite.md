[**@kazupon/jts-utils**](../index.md)

---

[@kazupon/jts-utils](../index.md) / Overwrite

# Type Alias: Overwrite\<T, U\>

```ts
type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & Pick<U, Extract<keyof U, keyof T>>;
```

Overwrite properties

## Type Parameters

| Type Parameter | Description                       |
| -------------- | --------------------------------- |
| `T`            | Original type                     |
| `U`            | Type with properties to overwrite |

## Example

```ts
import type { Overwrite } from '@kazupon/jts-utils'

type Original = {
  a: number
  b: string
}
type Overwritten = Overwrite<Original, { a: string; b: boolean; }>
// Resulting type:
// {
//   a: string
//   b: boolean
// }
```
