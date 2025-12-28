[**@kazupon/jts-utils**](../index.md)

---

[@kazupon/jts-utils](../index.md) / isOk

# Function: isOk()

```ts
function isOk<T, E>(result): result is Ok<T>;
```

Type guard function to check if a Result is Ok

## Type Parameters

| Type Parameter | Description               |
| -------------- | ------------------------- |
| `T`            | Type of the success value |
| `E`            | Type of the error value   |

## Parameters

| Parameter | Type                                              | Description                |
| --------- | ------------------------------------------------- | -------------------------- |
| `result`  | [`Result`](../type-aliases/Result.md)\<`T`, `E`\> | The Result object to check |

## Returns

`result is Ok<T>`

true if the Result is Ok, false if it is Err

## Example

```ts
import { isOk } from '@kazupon/jts-utils'
import type { Result } from '@kazupon/jts-utils'

const result: Result<number, string> = someFunction();
if (isOk(result)) {
  // Handle success
  console.log(result.value);
} else {
  // Handle failure
  console.error(result.error);
}
```
