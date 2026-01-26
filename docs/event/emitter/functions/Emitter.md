[**@kazupon/jts-utils**](../../../index.md)

---

[@kazupon/jts-utils](../../../index.md) / [event/emitter](../index.md) / Emitter

# Function: Emitter()

```ts
function Emitter<Events>(options?): Readonly<Emittable<Events> & Disposable>
```

Create a event emitter

This event emitter forked and inspired from the below:

- original repository url: https://github.com/developit/mitt
- code url: https://github.com/developit/mitt/blob/master/src/index.ts
- author: Jason Miller (https://github.com/developit)

## Type Parameters

| Type Parameter                                                                        | Description    |
| ------------------------------------------------------------------------------------- | -------------- |
| `Events` _extends_ `Record`\<[`EventType`](../type-aliases/EventType.md), `unknown`\> | Event map type |

## Parameters

| Parameter  | Type                                                | Description                                                   |
| ---------- | --------------------------------------------------- | ------------------------------------------------------------- |
| `options?` | [`EmitterOptions`](../interfaces/EmitterOptions.md) | An optional [EmitterOptions](../interfaces/EmitterOptions.md) |

## Returns

`Readonly`\<[`Emittable`](../interfaces/Emittable.md)\<`Events`\> & `Disposable`\>

An event emitter, which is [Emittable](../interfaces/Emittable.md)
