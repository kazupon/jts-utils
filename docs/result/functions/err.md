[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [result](../index.md) / err

# Function: err()

```ts
function err<E>(error): Err<E>
```

Utility function to create an Err object for failure

## Type Parameters

| Type Parameter | Description             |
| -------------- | ----------------------- |
| `E`            | Type of the error value |

## Parameters

| Parameter | Type | Description     |
| --------- | ---- | --------------- |
| `error`   | `E`  | The error value |

## Returns

[`Err`](../type-aliases/Err.md)\<`E`\>

An [Err](../type-aliases/Err.md) object

## Example

```ts
import { err } from '@kazupon/jts-utils'

const result = err('An error occurred') // Type is Err<string>
```
