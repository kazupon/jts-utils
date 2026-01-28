[**@kazupon/jts-utils**](../../../index.md)

---

[@kazupon/jts-utils](../../../index.md) / [message/port](../index.md) / MessagePortEvents

# Type Alias: MessagePortEvents\<T\>

```ts
type MessagePortEvents<T> = object
```

Message port events

## Type Parameters

| Type Parameter | Default type | Description       |
| -------------- | ------------ | ----------------- |
| `T`            | `unknown`    | Message data type |

## Properties

| Property                                 | Type                  | Description          |
| ---------------------------------------- | --------------------- | -------------------- |
| <a id="message"></a> `message`           | `MessageEvent`\<`T`\> | `message` event      |
| <a id="messageerror"></a> `messageerror` | `MessageEvent`        | `messageerror` event |
