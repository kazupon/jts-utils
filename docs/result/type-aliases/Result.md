[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [result](../index.md) / Result

# Type Alias: Result\<T, E\>

```ts
type Result<T, E> = Ok<T> | Err<E>
```

Result type representing success or failure

## Type Parameters

| Type Parameter | Default type | Description                                    |
| -------------- | ------------ | ---------------------------------------------- |
| `T`            | `void`       | Type of the success value, defaults to `void`  |
| `E`            | `unknown`    | Type of the error value, defaults to `unknown` |

## Example

```ts
import type { Result } from '@kazupon/jts-utils'

// Success example
const successResult: Result<number, string> = { ok: true, value: 42 }

// Failure example
const failureResult: Result<number, string> = { ok: false, error: 'An error occurred' }
```
