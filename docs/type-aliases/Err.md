[**@kazupon/jts-utils**](../index.md)

---

[@kazupon/jts-utils](../index.md) / Err

# Type Alias: Err\<E\>

```ts
type Err<E> = object;
```

Type representing a failure value

## Example

```ts
import type { Err } from '@kazupon/jts-utils'

// With an Error object
const errorObject: Err<Error> = { ok: false, error: new Error("Something went wrong") };
// With a string error
const errorString: Err<string> = { ok: false, error: "Something went wrong" };
```

## Type Parameters

| Type Parameter | Description             |
| -------------- | ----------------------- |
| `E`            | Type of the error value |

## Properties

| Property                   | Type    |
| -------------------------- | ------- |
| <a id="error"></a> `error` | `E`     |
| <a id="ok"></a> `ok`       | `false` |
