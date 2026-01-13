[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [observer](../index.md) / Observable

# Interface: Observable\<State\>

State value observable

## Extends

- `Disposable`

## Type Parameters

| Type Parameter |
| -------------- |
| `State`        |

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

### dispose()

```ts
dispose(): void;
```

dispose observable

#### Returns

`void`

---

### notify()

```ts
notify(state): void;
```

notify state value

#### Parameters

| Parameter | Type    | Description         |
| --------- | ------- | ------------------- |
| `state`   | `State` | updated state value |

#### Returns

`void`

---

### subscribe()

```ts
subscribe(listener): ObservableStateUnsubscribeHandler;
```

add state subscription

#### Parameters

| Parameter  | Type                                                                                               | Description |
| ---------- | -------------------------------------------------------------------------------------------------- | ----------- |
| `listener` | [`ObservableStateSubscribeHandler`](../type-aliases/ObservableStateSubscribeHandler.md)\<`State`\> | listener    |

#### Returns

[`ObservableStateUnsubscribeHandler`](ObservableStateUnsubscribeHandler.md)

unsubscribe handler

## Properties

| Property                                   | Modifier   | Type     | Description    |
| ------------------------------------------ | ---------- | -------- | -------------- |
| <a id="listenercount"></a> `listenerCount` | `readonly` | `number` | listener count |
