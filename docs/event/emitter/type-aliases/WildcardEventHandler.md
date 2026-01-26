[**@kazupon/jts-utils**](../../../index.md)

---

[@kazupon/jts-utils](../../../index.md) / [event/emitter](../index.md) / WildcardEventHandler

# Type Alias: WildcardEventHandler()\<T\>

```ts
type WildcardEventHandler<T> = (event, payload?) => void
```

Wildcard event handler

## Type Parameters

| Type Parameter | Default type                    | Description    |
| -------------- | ------------------------------- | -------------- |
| `T`            | `Record`\<`string`, `unknown`\> | Event map type |

## Parameters

| Parameter  | Type             |
| ---------- | ---------------- |
| `event`    | keyof `T`        |
| `payload?` | `T`\[keyof `T`\] |

## Returns

`void`
