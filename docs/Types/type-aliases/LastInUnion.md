[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [Types](../index.md) / LastInUnion

# Type Alias: LastInUnion\<U\>

```ts
type LastInUnion<U> = UnionToIntersection<U extends unknown ? (x) => 0 : never> extends (x) => 0 ? L : never;
```

Extract the last element in a union

## Type Parameters

| Type Parameter |
| -------------- |
| `U`            |
