[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [result](../index.md) / unwrap

# Function: unwrap()

```ts
function unwrap<T, E>(result): T;
```

Utility function to extract the success value from a Result

## Type Parameters

| Type Parameter | Description               |
| -------------- | ------------------------- |
| `T`            | Type of the success value |
| `E`            | Type of the error value   |

## Parameters

| Parameter | Type                                              | Description                 |
| --------- | ------------------------------------------------- | --------------------------- |
| `result`  | [`Result`](../type-aliases/Result.md)\<`T`, `E`\> | The Result object to unwrap |

## Returns

`T`

The success value

## Example

```ts
import { unwrap } from '@kazupon/jts-utils'
import type { Result } from '@kazupon/jts-utils'

const result: Result<number, string> = someFunction();
try {
  const value = unwrap(result);
  console.log("Success:", value);
} catch (e) {
  console.error("Error:", e);
}
```

## Throws

Throws the error from Err as-is on failure. If not an Error object, converts it to an Error object before throwing.
