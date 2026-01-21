[**@kazupon/jts-utils**](../../../index.md)

---

[@kazupon/jts-utils](../../../index.md) / [event/wait](../index.md) / waitOnce

# Function: waitOnce()

```ts
function waitOnce<T>(target, type, listenerOrSignal?, signal?): Promise<void>
```

Wait for an event to be fired once on the target

## Type Parameters

| Type Parameter              | Description            |
| --------------------------- | ---------------------- |
| `T` _extends_ `EventTarget` | The type of the target |

## Parameters

| Parameter           | Type                             | Description                                                 |
| ------------------- | -------------------------------- | ----------------------------------------------------------- |
| `target`            | `T`                              | The event target                                            |
| `type`              | `string`                         | The event type                                              |
| `listenerOrSignal?` | `AbortSignal` \| `EventListener` | An optional event listener or AbortSignal to cancel waiting |
| `signal?`           | `AbortSignal`                    | An optional AbortSignal to cancel waiting                   |

## Returns

`Promise`\<`void`\>

A promise that resolves when the event is fired

## Example

```ts
import { waitOnce } from '@kazupon/jts-utils'

const target = new EventTarget()

// wait for 'load' event
await waitOnce(target, 'load')
// do something after 'load' event is fired

// wait for 'data' event with abort signal
const controller = new AbortController()
await waitOnce(target, 'data', controller.signal)
// do something after 'data' event is fired or abort the waiting by controller.abort()

// wait for 'click' event with listener
await waitOnce(target, 'click', event => {
  console.log('clicked', event)
})

// wait for 'submit' event with listener and abort signal
await waitOnce(
  target,
  'submit',
  event => {
    console.log('submitted', event)
  },
  controller.signal
)
```

## Throws

when the signal is aborted
