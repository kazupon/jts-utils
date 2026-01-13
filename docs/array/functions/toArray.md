[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [array](../index.md) / toArray

# Function: toArray()

```ts
function toArray<T>(value): T[];
```

convert to array

## Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

## Parameters

| Parameter | Type         | Description |
| --------- | ------------ | ----------- |
| `value`   | `T` \| `T`[] | a value     |

## Returns

`T`[]

convrted array

## Example

```ts
import { toArray } from '@kazupon/jts-utils'

const result1 = toArray(42)
// result1: [42]
const result2 = toArray([1, 2, 3])
// result2: [1, 2, 3]
```
