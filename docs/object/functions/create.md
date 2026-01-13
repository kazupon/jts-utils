[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [object](../index.md) / create

# Function: create()

```ts
function create<T, R>(object): R;
```

create a new object

## Type Parameters

| Type Parameter                   | Default type                                                                                    |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| `T` _extends_ `object` \| `null` | `null`                                                                                          |
| `R`                              | `T` _extends_ `null` ? `object` : [`Merge`](../../types/type-aliases/Merge.md)\<`T`, `Object`\> |

## Parameters

| Parameter | Type          | Default value | Description                       |
| --------- | ------------- | ------------- | --------------------------------- |
| `object`  | `T` \| `null` | `null`        | prototype object, default is null |

## Returns

`R`

a new object

## Example

```ts
import { create } from '@kazupon/jts-utils'

const obj1 = create() // {}
const proto = { a: 1 }
const obj2 = create(proto) // inherits prototype
```
