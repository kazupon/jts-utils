[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [object](../index.md) / isPlainObject

# Function: isPlainObject()

```ts
function isPlainObject(value): value is Record<string, unknown>;
```

check if a value is a plain object

## Parameters

| Parameter | Type      | Description      |
| --------- | --------- | ---------------- |
| `value`   | `unknown` | a value to check |

## Returns

`value is Record<string, unknown>`

whether the value is a plain object

## Example

```ts
import { isPlainObject } from '@kazupon/jts-utils'

const result1 = isPlainObject({}); // true
const result2 = isPlainObject(null); // false
const result3 = isPlainObject([]); // false
const result4 = isPlainObject(() => {}); // false
```
