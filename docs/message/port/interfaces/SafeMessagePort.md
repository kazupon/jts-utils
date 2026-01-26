[**@kazupon/jts-utils**](../../../index.md)

---

[@kazupon/jts-utils](../../../index.md) / [message/port](../index.md) / SafeMessagePort

# Interface: SafeMessagePort\<T\>

Safe MessagePort wrapper interface

## Extends

- [`Emittable`](../../../event/emitter/interfaces/Emittable.md)\<[`MessagePortEvents`](../type-aliases/MessagePortEvents.md)\<`T`\>\>.`Disposable`

## Type Parameters

| Type Parameter | Default type | Description       |
| -------------- | ------------ | ----------------- |
| `T`            | `unknown`    | Message data type |

## Methods

### \[dispose\]()

```ts
dispose: void;
```

#### Returns

`void`

#### Inherited from

```ts
Disposable.[dispose]
```

---

### close()

```ts
close(): void;
```

Close the port and release all resources

#### Returns

`void`

---

### dispose()

```ts
dispose(): void;
```

Dispose the event emitter and all registered event handlers

#### Returns

`void`

#### Inherited from

[`Emittable`](../../../event/emitter/interfaces/Emittable.md).[`dispose`](../../../event/emitter/interfaces/Emittable.md#dispose)

---

### emit()

```ts
emit<Key>(event, ...payload): void;
```

Invoke all handlers with the event type.

Note Manually firing "\*" handlers should be not supported

#### Type Parameters

| Type Parameter                                                                           | Description       |
| ---------------------------------------------------------------------------------------- | ----------------- |
| `Key` _extends_ keyof [`MessagePortEvents`](../type-aliases/MessagePortEvents.md)\<`T`\> | An event type key |

#### Parameters

| Parameter    | Type                                                                                                                                                                                       | Description                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| `event`      | `Key`                                                                                                                                                                                      | An [EventType](../../../event/emitter/type-aliases/EventType.md) |
| ...`payload` | [`MessagePortEvents`](../type-aliases/MessagePortEvents.md)\<`T`\>\[`Key`\] _extends_ `undefined` ? \[\] : \[[`MessagePortEvents`](../type-aliases/MessagePortEvents.md)\<`T`\>\[`Key`\]\] | An event payload, optional if the event type is `undefined`      |

#### Returns

`void`

#### Inherited from

[`Emittable`](../../../event/emitter/interfaces/Emittable.md).[`emit`](../../../event/emitter/interfaces/Emittable.md#emit)

---

### off()

#### Call Signature

```ts
off(event, handler): void;
```

Unregister a wildcard event handler

##### Parameters

| Parameter | Type                                                                                                                                                        | Description                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `event`   | `"*"`                                                                                                                                                       | The wildcard event type "\*"                                                          |
| `handler` | [`WildcardEventHandler`](../../../event/emitter/type-aliases/WildcardEventHandler.md)\<[`MessagePortEvents`](../type-aliases/MessagePortEvents.md)\<`T`\>\> | A [WildcardEventHandler](../../../event/emitter/type-aliases/WildcardEventHandler.md) |

##### Returns

`void`

##### Inherited from

[`Emittable`](../../../event/emitter/interfaces/Emittable.md).[`off`](../../../event/emitter/interfaces/Emittable.md#off)

#### Call Signature

```ts
off<Key>(event, handler): void;
```

Unregister an event handler for the event type

##### Type Parameters

| Type Parameter                                                                           | Description       |
| ---------------------------------------------------------------------------------------- | ----------------- |
| `Key` _extends_ keyof [`MessagePortEvents`](../type-aliases/MessagePortEvents.md)\<`T`\> | An event type key |

##### Parameters

| Parameter | Type                                                                                                                                                 | Description                                                            |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `event`   | `Key`                                                                                                                                                | An [EventType](../../../event/emitter/type-aliases/EventType.md)       |
| `handler` | [`EventHandler`](../../../event/emitter/type-aliases/EventHandler.md)\<[`MessagePortEvents`](../type-aliases/MessagePortEvents.md)\<`T`\>\[`Key`\]\> | An [EventHandler](../../../event/emitter/type-aliases/EventHandler.md) |

##### Returns

`void`

##### Inherited from

[`Emittable`](../../../event/emitter/interfaces/Emittable.md).[`off`](../../../event/emitter/interfaces/Emittable.md#off)

---

### on()

#### Call Signature

```ts
on(event, handler): EventStopHandler;
```

Register a wildcard event handler that receives all events

##### Parameters

| Parameter | Type                                                                                                                                                        | Description                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `event`   | `"*"`                                                                                                                                                       | The wildcard event type "\*"                                                          |
| `handler` | [`WildcardEventHandler`](../../../event/emitter/type-aliases/WildcardEventHandler.md)\<[`MessagePortEvents`](../type-aliases/MessagePortEvents.md)\<`T`\>\> | A [WildcardEventHandler](../../../event/emitter/type-aliases/WildcardEventHandler.md) |

##### Returns

[`EventStopHandler`](../../../event/emitter/interfaces/EventStopHandler.md)

An [EventStopHandler](../../../event/emitter/interfaces/EventStopHandler.md)

##### Inherited from

[`Emittable`](../../../event/emitter/interfaces/Emittable.md).[`on`](../../../event/emitter/interfaces/Emittable.md#on)

#### Call Signature

```ts
on<Key>(event, handler): EventStopHandler;
```

Register an event handler with the event type

##### Type Parameters

| Type Parameter                                                                           | Description       |
| ---------------------------------------------------------------------------------------- | ----------------- |
| `Key` _extends_ keyof [`MessagePortEvents`](../type-aliases/MessagePortEvents.md)\<`T`\> | An event type key |

##### Parameters

| Parameter | Type                                                                                                                                                 | Description                                                            |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `event`   | `Key`                                                                                                                                                | An [EventType](../../../event/emitter/type-aliases/EventType.md)       |
| `handler` | [`EventHandler`](../../../event/emitter/type-aliases/EventHandler.md)\<[`MessagePortEvents`](../type-aliases/MessagePortEvents.md)\<`T`\>\[`Key`\]\> | An [EventHandler](../../../event/emitter/type-aliases/EventHandler.md) |

##### Returns

[`EventStopHandler`](../../../event/emitter/interfaces/EventStopHandler.md)

An [EventStopHandler](../../../event/emitter/interfaces/EventStopHandler.md)

##### Inherited from

[`Emittable`](../../../event/emitter/interfaces/Emittable.md).[`on`](../../../event/emitter/interfaces/Emittable.md#on)

---

### once()

#### Call Signature

```ts
once(event, handler): () => void;
```

Register a one-time wildcard event handler that receives all events.
The handler will be automatically unregistered after the first invocation.

##### Parameters

| Parameter | Type                                                                                                                                                        | Description                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `event`   | `"*"`                                                                                                                                                       | The wildcard event type "\*"                                                          |
| `handler` | [`WildcardEventHandler`](../../../event/emitter/type-aliases/WildcardEventHandler.md)\<[`MessagePortEvents`](../type-aliases/MessagePortEvents.md)\<`T`\>\> | A [WildcardEventHandler](../../../event/emitter/type-aliases/WildcardEventHandler.md) |

##### Returns

A function to manually stop the handler before it fires

```ts
(): void;
```

###### Returns

`void`

##### Inherited from

[`Emittable`](../../../event/emitter/interfaces/Emittable.md).[`once`](../../../event/emitter/interfaces/Emittable.md#once)

#### Call Signature

```ts
once<Key>(event, handler): () => void;
```

Register a one-time event handler with the event type.
The handler will be automatically unregistered after the first invocation.

##### Type Parameters

| Type Parameter                                                                           | Description       |
| ---------------------------------------------------------------------------------------- | ----------------- |
| `Key` _extends_ keyof [`MessagePortEvents`](../type-aliases/MessagePortEvents.md)\<`T`\> | An event type key |

##### Parameters

| Parameter | Type                                                                                                                                                 | Description                                                            |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `event`   | `Key`                                                                                                                                                | An [EventType](../../../event/emitter/type-aliases/EventType.md)       |
| `handler` | [`EventHandler`](../../../event/emitter/type-aliases/EventHandler.md)\<[`MessagePortEvents`](../type-aliases/MessagePortEvents.md)\<`T`\>\[`Key`\]\> | An [EventHandler](../../../event/emitter/type-aliases/EventHandler.md) |

##### Returns

A function to manually stop the handler before it fires

```ts
(): void;
```

###### Returns

`void`

##### Inherited from

[`Emittable`](../../../event/emitter/interfaces/Emittable.md).[`once`](../../../event/emitter/interfaces/Emittable.md#once)

---

### postMessage()

```ts
postMessage(message, transfer?): void;
```

Post a message through the port

#### Parameters

| Parameter   | Type             | Description                   |
| ----------- | ---------------- | ----------------------------- |
| `message`   | `T`              | The message to post           |
| `transfer?` | `Transferable`[] | Optional transferable objects |

#### Returns

`void`

---

### start()

```ts
start(): void;
```

Start receiving messages on this port

#### Returns

`void`

## Properties

| Property                                               | Type                                                                                              | Description                                       |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| <a id="addeventlistener"></a> `addEventListener`       | \{ \<`K`\> (`type`, `listener`, `options?`): `void`; (`type`, `listener`, `options?`): `void`; \} | Add an event listener to the underlying port      |
| <a id="dispatchevent"></a> `dispatchEvent`             | (`event`) => `boolean`                                                                            | Dispatch an event to the underlying port          |
| <a id="onmessage"></a> `onmessage`                     | (`this`, `ev`) => `any` \| `null`                                                                 | The onmessage event handler                       |
| <a id="onmessageerror"></a> `onmessageerror`           | (`this`, `ev`) => `any` \| `null`                                                                 | The onmessageerror event handler                  |
| <a id="removeeventlistener"></a> `removeEventListener` | \{ \<`K`\> (`type`, `listener`, `options?`): `void`; (`type`, `listener`, `options?`): `void`; \} | Remove an event listener from the underlying port |
