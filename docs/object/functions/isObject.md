[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [object](../index.md) / isObject

# Function: isObject()

```ts
function isObject(value): value is object;
```

check if a value is an object

## Parameters

| Parameter | Type      | Description      |
| --------- | --------- | ---------------- |
| `value`   | `unknown` | a value to check |

## Returns

`value is object`

whether the value is an object

## Example

```ts
import { isObject } from '@kazupon/jts-utils'

const result1 = isObject({}); // true
const result2 = isObject(null); // false
const result3 = isObject(42); // false
```
