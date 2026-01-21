[**@kazupon/jts-utils**](../../../index.md)

---

[@kazupon/jts-utils](../../../index.md) / [event/wait](../index.md) / waitFor

# Function: waitFor()

```ts
function waitFor<T>(_target, _type, _listenerOrOptions?, _options?): Promise<void>
```

Wait for an event to be fired on the target

## Type Parameters

| Type Parameter              | Description            |
| --------------------------- | ---------------------- |
| `T` _extends_ `EventTarget` | The type of the target |

## Parameters

| Parameter             | Type                                                                   | Description                                                                     |
| --------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `_target`             | `T`                                                                    | The event target                                                                |
| `_type`               | `string`                                                               | The event type                                                                  |
| `_listenerOrOptions?` | `EventListener` \| [`WaitForOptions`](../interfaces/WaitForOptions.md) | An optional event listener or [WaitForOptions](../interfaces/WaitForOptions.md) |
| `_options?`           | [`WaitForOptions`](../interfaces/WaitForOptions.md)                    | An optional [WaitForOptions](../interfaces/WaitForOptions.md)                   |

## Returns

`Promise`\<`void`\>

## Throws

when the signal is aborted
