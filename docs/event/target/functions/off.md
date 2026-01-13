[**@kazupon/jts-utils**](../../../index.md)

---

[@kazupon/jts-utils](../../../index.md) / [event/target](../index.md) / off

# Function: off()

```ts
function off<T>(
   _target,
   _type,
   _listenerOrOptions?,
   _options?): void;
```

Detach an event listener from the target

## Type Parameters

| Type Parameter              |
| --------------------------- |
| `T` _extends_ `EventTarget` |

## Parameters

| Parameter             | Type                                         | Description                                           |
| --------------------- | -------------------------------------------- | ----------------------------------------------------- |
| `_target`             | `T`                                          | The event target                                      |
| `_type`               | `string`                                     | The event type                                        |
| `_listenerOrOptions?` | `EventListener` \| `AddEventListenerOptions` | An optional event listener or AddEventListenerOptions |
| `_options?`           | `AddEventListenerOptions`                    | An optional AddEventListenerOptions                   |

## Returns

`void`
