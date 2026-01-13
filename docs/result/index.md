[**@kazupon/jts-utils**](../index.md)

---

[@kazupon/jts-utils](../index.md) / result

# result

Rust like Result/Option Utils

## Example

```ts
import { ok, err } from '@kazupon/jts-utils'
import type { Result } from '@kazupon/jts-utils'
```

## Functions

| Function                      | Description                                                 |
| ----------------------------- | ----------------------------------------------------------- |
| [err](functions/err.md)       | Utility function to create an Err object for failure        |
| [isErr](functions/isErr.md)   | Type guard function to check if a Result is Err             |
| [isOk](functions/isOk.md)     | Type guard function to check if a Result is Ok              |
| [ok](functions/ok.md)         | Utility function to create an Ok object for success         |
| [unwrap](functions/unwrap.md) | Utility function to extract the success value from a Result |

## Type Aliases

| Type Alias                       | Description                                 |
| -------------------------------- | ------------------------------------------- |
| [Err](type-aliases/Err.md)       | Type representing a failure value           |
| [Ok](type-aliases/Ok.md)         | Type representing a successful value        |
| [Result](type-aliases/Result.md) | Result type representing success or failure |
