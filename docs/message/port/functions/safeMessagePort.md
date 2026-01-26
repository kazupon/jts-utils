[**@kazupon/jts-utils**](../../../index.md)

---

[@kazupon/jts-utils](../../../index.md) / [message/port](../index.md) / safeMessagePort

# Function: safeMessagePort()

```ts
function safeMessagePort<T>(port): SafeMessagePortResult<T>
```

Create a safe MessagePort wrapper as an [event emitter](../../../event/emitter/interfaces/Emittable.md)

The returned SafeMessagePort will automatically handle the closing of the `MessagePort` when disposed, and it will also manage event listeners to prevent memory leaks.

The underlying `MessagePort` will be started automatically.

## Type Parameters

| Type Parameter | Default type | Description       |
| -------------- | ------------ | ----------------- |
| `T`            | `unknown`    | Message data type |

## Parameters

| Parameter | Type          | Description             |
| --------- | ------------- | ----------------------- |
| `port`    | `MessagePort` | The MessagePort to wrap |

## Returns

[`SafeMessagePortResult`](../type-aliases/SafeMessagePortResult.md)\<`T`\>

A [SafeMessagePort](../interfaces/SafeMessagePort.md) that wraps the `MessagePort`

## Example

```ts
const channel = new MessageChannel()
const port = safeMessagePort<{ greeting: string }>(channel.port1)

port.on('message', event => {
  console.log(event.data.greeting) // type-safe
})

port.postMessage({ greeting: 'hello' }) // type-safe
```
