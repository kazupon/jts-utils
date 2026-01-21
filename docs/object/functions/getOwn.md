[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [object](../index.md) / getOwn

# Function: getOwn()

```ts
function getOwn<T, K>(target, key): T[K] | undefined
```

get own property value of an object

## Type Parameters

| Type Parameter                                 |
| ---------------------------------------------- |
| `T` _extends_ `object`                         |
| `K` _extends_ `string` \| `number` \| `symbol` |

## Parameters

| Parameter | Type | Description                |
| --------- | ---- | -------------------------- |
| `target`  | `T`  | a target object            |
| `key`     | `K`  | property key of the object |

## Returns

`T`\[`K`\] \| `undefined`

the property value, if the object has the property, otherwise undefined

## Example

```ts
import { getOwn } from '@kazupon/jts-utils'

const obj = { a: 1 }
const result1 = getOwn(obj, 'a') // 1
const result2 = getOwn(obj, 'b') // undefined
```
