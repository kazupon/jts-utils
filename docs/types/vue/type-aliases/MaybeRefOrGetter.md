[**@kazupon/jts-utils**](../../../index.md)

---

[@kazupon/jts-utils](../../../index.md) / [types/vue](../index.md) / MaybeRefOrGetter

# Type Alias: MaybeRefOrGetter\<T\>

```ts
type MaybeRefOrGetter<T> = MaybeRef<T> | () => T;
```

define `ref`, primitive type or getter function

## Type Parameters

| Type Parameter | Default type | Description                      |
| -------------- | ------------ | -------------------------------- |
| `T`            | `any`        | Type of the value, default `any` |

## Example

```ts
import type { MaybeRefOrGetter } from '@kazupon/jts-utils/vue'

const value1: MaybeRefOrGetter<number> = 42
const value2: MaybeRefOrGetter<number> = ref(42)
const value3: MaybeRefOrGetter<number> = () => 42
```
