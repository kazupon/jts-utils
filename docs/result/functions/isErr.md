[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [result](../index.md) / isErr

# Function: isErr()

```ts
function isErr<T, E>(result): result is Err<E>
```

Type guard function to check if a Result is Err

## Type Parameters

| Type Parameter |
| -------------- |
| `T`            |
| `E`            |

## Parameters

| Parameter | Type                                              | Description                |
| --------- | ------------------------------------------------- | -------------------------- |
| `result`  | [`Result`](../type-aliases/Result.md)\<`T`, `E`\> | The Result object to check |

## Returns

`result is Err<E>`

true if the Result is Err, false if it is Ok

## Example

```ts
import { isErr } from '@kazupon/jts-utils'
import type { Result } from '@kazupon/jts-utils'

const result: Result<number, string> = someFunction()
if (isErr(result)) {
  // Handle failure
  console.error(result.error)
} else {
  // Handle success
  console.log(result.value)
}
```
