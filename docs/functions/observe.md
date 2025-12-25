[**@kazupon/jts-utils**](../index.md)

---

[@kazupon/jts-utils](../index.md) / observe

# Function: observe()

```ts
function observe<State>(): Readonly<Observable<State>>;
```

observe state value

## Type Parameters

| Type Parameter |
| -------------- |
| `State`        |

## Returns

`Readonly`\<[`Observable`](../interfaces/Observable.md)\<`State`\>\>

observable state value

## Examples

```ts
import { observe } from '@kazupon/jts-utils/observer'

// create observable
const observer = observe<{ a: number }>()

// subscribe state change
const unsubscribe = observer.subscribe((state) => {
  console.log(state)
})

// notify state change
observer.notify({ a: 1 })

// unsubscribe
unsubscribe()
```

if javascript runtime supports `Symbol.dispose`, you can use it as follows:

```ts
import { observe } from '@kazupon/jts-utils/observer'

// create observable with `using` syntax
// when the scope is exited, `observer.dispose` will be called automatically
using observer = observe<{ a: number }>()

const unsubscribe1 = observer.subscribe((state) => {
 console.log(state)
})

// subscribe with `using` syntax
// when the scope is exited, `unsubscribe2` will be called automatically
using unsubscribe2 = observer.subscribe((state) => {
 console.log(state)
})

observer.notify({ a: 1 })
```
