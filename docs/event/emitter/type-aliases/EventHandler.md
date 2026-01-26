[**@kazupon/jts-utils**](../../../index.md)

---

[@kazupon/jts-utils](../../../index.md) / [event/emitter](../index.md) / EventHandler

# Type Alias: EventHandler\<T\>

```ts
type EventHandler<T> = T extends undefined ? () => void : (payload) => void
```

Event handler

## Type Parameters

| Type Parameter | Default type | Description        |
| -------------- | ------------ | ------------------ |
| `T`            | `unknown`    | Event payload type |
