[**@kazupon/jts-utils**](../../../index.md)

---

[@kazupon/jts-utils](../../../index.md) / [event/emitter](../index.md) / EventHandlerMap

# Type Alias: EventHandlerMap\<Events\>

```ts
type EventHandlerMap<Events> = Map<
  keyof Events | '*',
  EventHandlerList<Events[keyof Events]> | WildcardEventHandlerList<Events>
>
```

Event handler map

## Type Parameters

| Type Parameter                                                        |
| --------------------------------------------------------------------- |
| `Events` _extends_ `Record`\<[`EventType`](EventType.md), `unknown`\> |
