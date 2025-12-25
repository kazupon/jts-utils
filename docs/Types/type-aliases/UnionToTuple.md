[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [Types](../index.md) / UnionToTuple

# Type Alias: UnionToTuple\<U, Last\>

```ts
type UnionToTuple<U, Last> = [U] extends [never] ? [] : [...UnionToTuple<Exclude<U, Last>>, Last];
```

Convert a union to tuple

## Type Parameters

| Type Parameter | Default type                           |
| -------------- | -------------------------------------- |
| `U`            | -                                      |
| `Last`         | [`LastInUnion`](LastInUnion.md)\<`U`\> |
