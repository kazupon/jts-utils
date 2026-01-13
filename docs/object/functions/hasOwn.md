[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [object](../index.md) / hasOwn

# Function: hasOwn()

```ts
function hasOwn(target, key): boolean;
```

check if an object has a property

## Parameters

| Parameter | Type                             | Description                |
| --------- | -------------------------------- | -------------------------- |
| `target`  | `object` \| `any`[]              | a target object            |
| `key`     | `string` \| `number` \| `symbol` | property key of the object |

## Returns

`boolean`

whether the object has the property

## Example

```ts
import { hasOwn } from '@kazupon/jts-utils'

const obj = { a: 1 }
const result1 = hasOwn(obj, 'a') // true
const result2 = hasOwn(obj, 'b') // false
```
