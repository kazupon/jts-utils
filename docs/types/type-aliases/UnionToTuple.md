[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [types](../index.md) / UnionToTuple

# Type Alias: UnionToTuple\<U, Last\>

```ts
type UnionToTuple<U, Last> = [U] extends [never] ? [] : [...UnionToTuple<Exclude<U, Last>>, Last]
```

Convert a union to tuple

## Type Parameters

| Type Parameter | Default type                           | Description |
| -------------- | -------------------------------------- | ----------- |
| `U`            | -                                      | Union type  |
| `Last`         | [`LastInUnion`](LastInUnion.md)\<`U`\> | -           |

## Example

```ts
import type { UnionToTuple } from '@kazupon/jts-utils'

type MyUnion = { a: string } | { b: number } | { c: boolean }
type MyTuple = UnionToTuple<MyUnion>
// Resulting type:
// [
//   { a: string },
//   { b: number },
//   { c: boolean }
// ]
```
