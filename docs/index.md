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
| [createEmitter](functions/createEmitter.md)   | Create a event emitter                                          |
| [err](functions/err.md)                       | Utility function to create an Err object for failure            |
| [interopDefault](functions/interopDefault.md) | resolve module with interop default for CommonJS and ES Modules |
| [isErr](functions/isErr.md)                   | Type guard function to check if a Result is Err                 |
| [isOk](functions/isOk.md)                     | Type guard function to check if a Result is Ok                  |
| [observe](functions/observe.md)               | observe state value                                             |
| [ok](functions/ok.md)                         | Utility function to create an Ok object for success             |
| [pascalize](functions/pascalize.md)           | pascalize string                                                |
| [toArray](functions/toArray.md)               | convert to array                                                |
| [unwrap](functions/unwrap.md)                 | Utility function to extract the success value from a Result     |

## Interfaces

| Interface                                                                            | Description                     |
| ------------------------------------------------------------------------------------ | ------------------------------- |
| [Observable](interfaces/Observable.md)                                               | State value observable          |
| [ObservableStateUnsubscribeHandler](interfaces/ObservableStateUnsubscribeHandler.md) | State value unsubscribe handler |

## Type Aliases

| Type Alias                                                                         | Description                                                        |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [Awaitable](type-aliases/Awaitable.md)                                             | Define a promise type that can be await from T                     |
| [Err](type-aliases/Err.md)                                                         | Type representing a failure value                                  |
| [InteropModuleDefault](type-aliases/InteropModuleDefault.md)                       | Extract module type with interoperability for CJS `module.exports` |
| [IsNever](type-aliases/IsNever.md)                                                 | Check never type                                                   |
| [IsNull](type-aliases/IsNull.md)                                                   | whether the type is null                                           |
| [IsObject](type-aliases/IsObject.md)                                               | whether the type is object                                         |
| [IsPlainObject](type-aliases/IsPlainObject.md)                                     | whether the type is a plain object                                 |
| [LastInUnion](type-aliases/LastInUnion.md)                                         | Extract the last element in a union                                |
| [Merge](type-aliases/Merge.md)                                                     | Merge two types                                                    |
| [ObservableStateSubscribeHandler](type-aliases/ObservableStateSubscribeHandler.md) | State value subscribe handler                                      |
| [Ok](type-aliases/Ok.md)                                                           | Type representing a successful value                               |
| [Overwrite](type-aliases/Overwrite.md)                                             | Overwrite properties                                               |
| [Prettify](type-aliases/Prettify.md)                                               | Prettify a type by flattening its structure.                       |
| [Result](type-aliases/Result.md)                                                   | Result type representing success or failure                        |
| [UnionToIntersection](type-aliases/UnionToIntersection.md)                         | Convert a union to intersection                                    |
| [UnionToTuple](type-aliases/UnionToTuple.md)                                       | Convert a union to tuple                                           |
