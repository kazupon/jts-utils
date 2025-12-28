[**@kazupon/jts-utils**](../index.md)

---

[@kazupon/jts-utils](../index.md) / ok

# Function: ok()

```ts
function ok<T>(value?): Ok<T>;
```

Utility function to create an Ok object for success

## Type Parameters

| Type Parameter | Default type | Description                                   |
| -------------- | ------------ | --------------------------------------------- |
| `T`            | `void`       | Type of the success value, defaults to `void` |

## Parameters

| Parameter | Type | Description       |
| --------- | ---- | ----------------- |
| `value?`  | `T`  | The success value |

## Returns

[`Ok`](../type-aliases/Ok.md)\<`T`\>

An [Ok](../type-aliases/Ok.md) object

## Example

```ts
import { ok } from '@kazupon/jts-utils'

const result = ok(42); // Type is Ok<number>
```
