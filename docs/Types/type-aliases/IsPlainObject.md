[**@kazupon/jts-utils**](../../index.md)

---

[@kazupon/jts-utils](../../index.md) / [Types](../index.md) / IsPlainObject

# Type Alias: IsPlainObject\<T\>

```ts
type IsPlainObject<T> = T extends object ? T extends Function | any[] | null ? false : true : false;
```

whether the type is a plain object

## Type Parameters

| Type Parameter |
| -------------- |
| `T`            |
