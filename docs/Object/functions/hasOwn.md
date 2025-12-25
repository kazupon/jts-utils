[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [Object](../index.md) / hasOwn

# Function: hasOwn()

```ts
function hasOwn(target, key): boolean;
```

Check if an object has a property

## Parameters

| Parameter | Type                             | Description                |
| --------- | -------------------------------- | -------------------------- |
| `target`  | `object` \| `any`[]              | a target object            |
| `key`     | `string` \| `number` \| `symbol` | property key of the object |

## Returns

`boolean`

whether the object has the property

## Description

this utility is sugar function of `Object.prototype.hasOwnProperty` function, array is also supported.
