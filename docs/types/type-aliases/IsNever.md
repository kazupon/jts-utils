[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [types](../index.md) / IsNever

# Type Alias: IsNever\<T\>

```ts
type IsNever<T> = [T] extends [never] ? true : false;
```

Check never type

## Type Parameters

| Type Parameter | Description   |
| -------------- | ------------- |
| `T`            | Type to check |

## Example

```ts
import type { IsNever } from '@kazupon/jts-utils'

type A = IsNever<never> // true
type B = IsNever<string> // false
```
