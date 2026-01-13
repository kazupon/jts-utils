[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [types](../index.md) / IsNull

# Type Alias: IsNull\<T\>

```ts
type IsNull<T> = T extends null ? true : false;
```

whether the type is null

## Type Parameters

| Type Parameter | Description   |
| -------------- | ------------- |
| `T`            | Type to check |

## Example

```ts
import type { IsNull } from '@kazupon/jts-utils'

type A = IsNull<null> // true
type B = IsNull<string> // false
```
