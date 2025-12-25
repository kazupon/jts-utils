[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [Types](../index.md) / Merge

# Type Alias: Merge\<F, S\>

```ts
type Merge<F, S> = { [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never };
```

Merge two types

## Type Parameters

| Type Parameter |
| -------------- |
| `F`            |
| `S`            |
