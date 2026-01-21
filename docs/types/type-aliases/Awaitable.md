[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [types](../index.md) / Awaitable

# Type Alias: Awaitable\<T\>

```ts
type Awaitable<T> = T | Promise<T>
```

Define a promise type that can be await from T

## Type Parameters

| Type Parameter | Description        |
| -------------- | ------------------ |
| `T`            | Type to be awaited |

## Example

```ts
import type { Awaitable } from '@kazupon/jts-utils'

// Example with a synchronous value
const syncValue: Awaitable<number> = 42
// Example with a Promise
const asyncValue: Awaitable<number> = Promise.resolve(42)
```
