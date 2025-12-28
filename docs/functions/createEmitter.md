[**@kazupon/jts-utils**](../index.md)

---

[@kazupon/jts-utils](../index.md) / createEmitter

# Function: createEmitter()

```ts
function createEmitter<Events>(): Readonly<Emittable<Events>>;
```

Create a event emitter

This event emitter forked and inspired from the below:

- original repository url: https://github.com/developit/mitt
- code url: https://github.com/developit/mitt/blob/master/src/index.ts
- author: Jason Miller (https://github.com/developit)

## Type Parameters

| Type Parameter                                        |
| ----------------------------------------------------- |
| `Events` _extends_ `Record`\<`EventType`, `unknown`\> |

## Returns

`Readonly`\<`Emittable`\<`Events`\>\>

An event emitter, which is Emittable
