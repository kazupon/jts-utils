[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [abort](../index.md) / abortError

# Function: abortError()

```ts
function abortError(signal?, options?): unknown;
```

Create an AbortError

## Parameters

| Parameter  | Type                                                      | Description                                                |
| ---------- | --------------------------------------------------------- | ---------------------------------------------------------- |
| `signal?`  | `AbortSignal`                                             | An AbortSignal                                             |
| `options?` | [`AbortErrorOptions`](../interfaces/AbortErrorOptions.md) | An [AbortErrorOptions](../interfaces/AbortErrorOptions.md) |

## Returns

`unknown`

if the signal has a reason, return it; otherwise, return a new DOMException with the specified options.

## Example

```ts
import { abortError } from '@kazupon/jts-utils'

const controller = new AbortController()
controller.abort()
const error = abortError(controller.signal, { message: 'Custom abort message' })
console.log(error) // DOMException: Custom abort message
```
