[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [abort](../index.md) / throwIfAborted

# Function: throwIfAborted()

```ts
function throwIfAborted(signal?): void;
```

Throw an AbortError if the signal is aborted

## Parameters

| Parameter | Type          | Description    |
| --------- | ------------- | -------------- |
| `signal?` | `AbortSignal` | An AbortSignal |

## Returns

`void`

## Example

```ts
import { throwIfAborted } from '@kazupon/jts-utils'

const controller = new AbortController()
controller.abort()
throwIfAborted(controller.signal) // Throws DOMException: Aborted
```

## Throws

- An abort error via [abortError](abortError.md)
