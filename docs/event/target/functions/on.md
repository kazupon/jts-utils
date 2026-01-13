[**@kazupon/jts-utils**](../../../index.md)

---

[@kazupon/jts-utils](../../../index.md) / [event/target](../index.md) / on

# Function: on()

```ts
function on<T>(
   _target,
   _type,
   _listenerOrOptions?,
   _options?): EventTargetStopHandler;
```

Attach an event listener to the target

## Type Parameters

| Type Parameter              | Description            |
| --------------------------- | ---------------------- |
| `T` _extends_ `EventTarget` | The type of the target |

## Parameters

| Parameter             | Type                                         | Description                                           |
| --------------------- | -------------------------------------------- | ----------------------------------------------------- |
| `_target`             | `T`                                          | The event target                                      |
| `_type`               | `string`                                     | The event type                                        |
| `_listenerOrOptions?` | `EventListener` \| `AddEventListenerOptions` | An optional event listener or AddEventListenerOptions |
| `_options?`           | `AddEventListenerOptions`                    | An optional AddEventListenerOptions                   |

## Returns

[`EventTargetStopHandler`](../interfaces/EventTargetStopHandler.md)

A handler to stop the event listener
