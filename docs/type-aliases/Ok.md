[**@kazupon/jts-utils**](../index.md)

---

[@kazupon/jts-utils](../index.md) / Ok

# Type Alias: Ok\<T\>

```ts
type Ok<T> = object;
```

Type representing a successful value

## Example

```ts
import type { Ok } from '@kazupon/jts-utils'

const result: Ok<number> = { ok: true, value: 42 };
```

## Type Parameters

| Type Parameter | Description               |
| -------------- | ------------------------- |
| `T`            | Type of the success value |

## Properties

| Property                   | Type   |
| -------------------------- | ------ |
| <a id="ok"></a> `ok`       | `true` |
| <a id="value"></a> `value` | `T`    |
