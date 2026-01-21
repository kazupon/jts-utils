[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [object](../index.md) / toTypeString

# Function: toTypeString()

```ts
function toTypeString(value): string
```

get the type string of a value

## Parameters

| Parameter | Type      | Description  |
| --------- | --------- | ------------ |
| `value`   | `unknown` | target value |

## Returns

`string`

type string with `[object ${type}]`

## Example

```ts
import { toTypeString } from '@kazupon/jts-utils'

const result1 = toTypeString({}) // "[object Object]"
const result2 = toTypeString([]) // "[object Array]"
const result4 = toTypeString(42) // "[object Number]"
```
