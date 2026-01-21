[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [types](../index.md) / InteropModuleDefault

# Type Alias: InteropModuleDefault\<T\>

```ts
type InteropModuleDefault<T> = T extends object ? U : T
```

Extract module type with interoperability for CJS `module.exports`

## Type Parameters

| Type Parameter | Description |
| -------------- | ----------- |
| `T`            | Module type |

## Example

```ts
import type { InteropModuleDefault } from '@kazupon/jts-utils'

// Example for `default` export in ESM Module
type ESMModule = {
  default: {
    foo: string
  }
}
type ESMResult = InteropModuleDefault<ESMModule>
// Resulting type:
// {
//   foo: string
// }

// Example for CJS Module
type CJSModule = {
  foo: string
}
type CJSResult = InteropModuleDefault<CJSModule>
// Resulting type:
// {
//   foo: string
// }
```
