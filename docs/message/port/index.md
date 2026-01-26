[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / message/port

# message/port

Message Port Utilities

## Example

```ts
import { safeMessagePort } from '@kazupon/jts-utils/message/port'
```

## Functions

| Function                                        | Description                                                                                          |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [safeMessagePort](functions/safeMessagePort.md) | Create a safe MessagePort wrapper as an [event emitter](../../event/emitter/interfaces/Emittable.md) |

## Interfaces

| Interface                                        | Description                        |
| ------------------------------------------------ | ---------------------------------- |
| [SafeMessagePort](interfaces/SafeMessagePort.md) | Safe MessagePort wrapper interface |

## Type Aliases

| Type Alias                                                     | Description                                                     |
| -------------------------------------------------------------- | --------------------------------------------------------------- |
| [MessagePortEvents](type-aliases/MessagePortEvents.md)         | Message port events                                             |
| [SafeMessagePortResult](type-aliases/SafeMessagePortResult.md) | Return type for [safeMessagePort](functions/safeMessagePort.md) |
