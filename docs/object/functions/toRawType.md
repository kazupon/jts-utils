[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [object](../index.md) / toRawType

# Function: toRawType()

```ts
function toRawType(value): string
```

get the raw type of a value

## Parameters

| Parameter | Type      | Description  |
| --------- | --------- | ------------ |
| `value`   | `unknown` | target value |

## Returns

`string`

extract "RawType" from strings like "[object RawType]"

## Example

```ts
import { toRawType } from '@kazupon/jts-utils'

const result1 = toRawType({}) // "Object"
const result2 = toRawType([]) // "Array"
const result3 = toRawType(42) // "Number"
```
