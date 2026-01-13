[**@kazupon/jts-utils**](../../../index.md)

---

[@kazupon/jts-utils](../../../index.md) / [event/emitter](../index.md) / Emittable

# Interface: Emittable\<Events\>

Event emitter interface

## Type Parameters

| Type Parameter                                                                        | Default type |
| ------------------------------------------------------------------------------------- | ------------ |
| `Events` _extends_ `Record`\<[`EventType`](../type-aliases/EventType.md), `unknown`\> | `object`     |

## Methods

### emit()

```ts
emit<Key>(event, ...payload): void;
```

Invoke all handlers with the event type.

Note Manually firing "\*" handlers should be not supported

#### Type Parameters

| Type Parameter                                   |
| ------------------------------------------------ |
| `Key` _extends_ `string` \| `number` \| `symbol` |

#### Parameters

| Parameter    | Type                                                                   | Description                                                 |
| ------------ | ---------------------------------------------------------------------- | ----------------------------------------------------------- |
| `event`      | `Key`                                                                  | An [EventType](../type-aliases/EventType.md)                |
| ...`payload` | `Events`\[`Key`\] _extends_ `undefined` ? \[\] : \[`Events`\[`Key`\]\] | An event payload, optional if the event type is `undefined` |

#### Returns

`void`

---

### off()

#### Call Signature

```ts
off(event, handler): void;
```

Unregister a wildcard event handler

##### Parameters

| Parameter | Type                                                                          | Description                                                       |
| --------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `event`   | `"*"`                                                                         | The wildcard event type "\*"                                      |
| `handler` | [`WildcardEventHandler`](../type-aliases/WildcardEventHandler.md)\<`Events`\> | A [WildcardEventHandler](../type-aliases/WildcardEventHandler.md) |

##### Returns

`void`

#### Call Signature

```ts
off<Key>(event, handler): void;
```

Unregister an event handler for the event type

##### Type Parameters

| Type Parameter                                   |
| ------------------------------------------------ |
| `Key` _extends_ `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type                                                                   | Description                                        |
| --------- | ---------------------------------------------------------------------- | -------------------------------------------------- |
| `event`   | `Key`                                                                  | An [EventType](../type-aliases/EventType.md)       |
| `handler` | [`EventHandler`](../type-aliases/EventHandler.md)\<`Events`\[`Key`\]\> | An [EventHandler](../type-aliases/EventHandler.md) |

##### Returns

`void`

---

### on()

#### Call Signature

```ts
on(event, handler): EventStopHandler;
```

Register a wildcard event handler that receives all events

##### Parameters

| Parameter | Type                                                                          | Description                                                       |
| --------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `event`   | `"*"`                                                                         | The wildcard event type "\*"                                      |
| `handler` | [`WildcardEventHandler`](../type-aliases/WildcardEventHandler.md)\<`Events`\> | A [WildcardEventHandler](../type-aliases/WildcardEventHandler.md) |

##### Returns

[`EventStopHandler`](EventStopHandler.md)

An [EventStopHandler](EventStopHandler.md)

#### Call Signature

```ts
on<Key>(event, handler): EventStopHandler;
```

Register an event handler with the event type

##### Type Parameters

| Type Parameter                                   |
| ------------------------------------------------ |
| `Key` _extends_ `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type                                                                   | Description                                        |
| --------- | ---------------------------------------------------------------------- | -------------------------------------------------- |
| `event`   | `Key`                                                                  | An [EventType](../type-aliases/EventType.md)       |
| `handler` | [`EventHandler`](../type-aliases/EventHandler.md)\<`Events`\[`Key`\]\> | An [EventHandler](../type-aliases/EventHandler.md) |

##### Returns

[`EventStopHandler`](EventStopHandler.md)

An [EventStopHandler](EventStopHandler.md)
