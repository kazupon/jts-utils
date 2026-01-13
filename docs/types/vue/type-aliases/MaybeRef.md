[**@kazupon/jts-utils**](../../../index.md)

---

[@kazupon/jts-utils](../../../index.md) / [types/vue](../index.md) / MaybeRef

# Type Alias: MaybeRef\<T\>

```ts
type MaybeRef<T> = T | Ref<T>;
```

define `ref` or premitive type

## Type Parameters

| Type Parameter | Default type | Description       |
| -------------- | ------------ | ----------------- |
| `T`            | `any`        | Type of the value |

## Example

```ts
import type { MaybeRef } from '@kazupon/jts-utils/vue'

const value1: MaybeRef<number> = 42
const value2: MaybeRef<number> = ref(42)
```
