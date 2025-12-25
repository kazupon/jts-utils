**@kazupon/jts-utils**

---

# @kazupon/jts-utils

jts-utils main entry point

This entry point re-exports **all** utility modules provided by the jts-utils library.

## Example

```ts
import { toArray } from '@kazupon/jts-utils'
```

## Functions

| Function                                      | Description                                                     |
| --------------------------------------------- | --------------------------------------------------------------- |
| [interopDefault](functions/interopDefault.md) | resolve module with interop default for CommonJS and ES Modules |
| [observe](functions/observe.md)               | observe state value                                             |
| [pascalize](functions/pascalize.md)           | pascalize string                                                |
| [toArray](functions/toArray.md)               | convert to array                                                |

## Interfaces

| Interface                                                                            | Description                     |
| ------------------------------------------------------------------------------------ | ------------------------------- |
| [Observable](interfaces/Observable.md)                                               | State value observable          |
| [ObservableStateUnsubscribeHandler](interfaces/ObservableStateUnsubscribeHandler.md) | State value unsubscribe handler |

## Type Aliases

| Type Alias                                                                         | Description                                                        |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [Awaitable](type-aliases/Awaitable.md)                                             | Define a promise type that can be await from T                     |
| [InteropModuleDefault](type-aliases/InteropModuleDefault.md)                       | Extract module type with interoperability for CJS `module.exports` |
| [IsNever](type-aliases/IsNever.md)                                                 | Check never type                                                   |
| [IsNull](type-aliases/IsNull.md)                                                   | whether the type is null                                           |
| [IsObject](type-aliases/IsObject.md)                                               | whether the type is object                                         |
| [IsPlainObject](type-aliases/IsPlainObject.md)                                     | whether the type is a plain object                                 |
| [LastInUnion](type-aliases/LastInUnion.md)                                         | Extract the last element in a union                                |
| [Merge](type-aliases/Merge.md)                                                     | Merge two types                                                    |
| [ObservableStateSubscribeHandler](type-aliases/ObservableStateSubscribeHandler.md) | State value subscribe handler                                      |
| [UnionToIntersection](type-aliases/UnionToIntersection.md)                         | Convert a union to intersection                                    |
| [UnionToTuple](type-aliases/UnionToTuple.md)                                       | Convert a union to tuple                                           |
