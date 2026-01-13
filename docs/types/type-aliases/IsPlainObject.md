[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [types](../index.md) / IsPlainObject

# Type Alias: IsPlainObject\<T\>

```ts
type IsPlainObject<T> = T extends object ? T extends Function | any[] | null ? false : true : false;
```

whether the type is a plain object

## Type Parameters

| Type Parameter | Description   |
| -------------- | ------------- |
| `T`            | Type to check |

## Example

```ts
import type { IsPlainObject } from '@kazupon/jts-utils'

type A = IsPlainObject<{ a: number }> // true
type B = IsPlainObject<string[]> // false
type C = IsPlainObject<Function> // false
```
