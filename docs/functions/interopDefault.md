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

## Example

```ts
import { interopDefault } from '@kazupon/jts-utils'

// For ES Module
const esmModule = {
  default: {
    foo: 'bar'
  }
}
const resolvedEsm = await interopDefault(esmModule)
// resolvedEsm: { foo: 'bar' }

// For CommonJS Module
const cjsModule = {
  foo: 'bar'
}
const resolvedCjs = await interopDefault(cjsModule)
// resolvedCjs: { foo: 'bar' }
```
