[**@kazupon/jts-utils**](../index.md)

---

[@kazupon/jts-utils](../index.md) / interopDefault

# Function: interopDefault()

```ts
function interopDefault<T>(mod): Promise<InteropModuleDefault<T>>;
```

resolve module with interop default for CommonJS and ES Modules

## Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

## Parameters

| Parameter | Type                                               | Description |
| --------- | -------------------------------------------------- | ----------- |
| `mod`     | [`Awaitable`](../type-aliases/Awaitable.md)\<`T`\> | a module    |

## Returns

`Promise`\<[`InteropModuleDefault`](../type-aliases/InteropModuleDefault.md)\<`T`\>\>

resolved module
