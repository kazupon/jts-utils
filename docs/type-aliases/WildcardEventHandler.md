[**@kazupon/jts-utils**](../index.md)

---

[@kazupon/jts-utils](../index.md) / WildcardEventHandler

# Type Alias: WildcardEventHandler()\<T\>

```ts
type WildcardEventHandler<T> = (event, payload?) => void;
```

Wildcard event handler

## Type Parameters

| Type Parameter | Default type                    |
| -------------- | ------------------------------- |
| `T`            | `Record`\<`string`, `unknown`\> |

## Parameters

| Parameter  | Type             |
| ---------- | ---------------- |
| `event`    | keyof `T`        |
| `payload?` | `T`\[keyof `T`\] |

## Returns

`void`
