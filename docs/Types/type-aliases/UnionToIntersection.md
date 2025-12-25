[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [Types](../index.md) / UnionToIntersection

# Type Alias: UnionToIntersection\<U\>

```ts
type UnionToIntersection<U> = U extends unknown ? (argument) => 0 : never extends (argument) => 0 ? I : never;
```

Convert a union to intersection

## Type Parameters

| Type Parameter |
| -------------- |
| `U`            |
