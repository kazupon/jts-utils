[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [Object](../index.md) / create

# Function: create()

```ts
function create<T, R>(object): R;
```

Create a new object

## Type Parameters

| Type Parameter                   | Default type                                                                                    |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| `T` _extends_ `object` \| `null` | `null`                                                                                          |
| `R`                              | `T` _extends_ `null` ? `object` : [`Merge`](../../Types/type-aliases/Merge.md)\<`T`, `Object`\> |

## Parameters

| Parameter | Type          | Default value | Description                       |
| --------- | ------------- | ------------- | --------------------------------- |
| `object`  | `T` \| `null` | `null`        | prototype object, default is null |

## Returns

`R`

a new object
