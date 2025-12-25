[**@kazupon/jts-utils**](../index.md)

---

[@kazupon/jts-utils](../index.md) / IsObject

# Type Alias: IsObject\<T\>

```ts
type IsObject<T> = T extends object ? T extends Function ? false : true : false;
```

whether the type is object

## Type Parameters

| Type Parameter |
| -------------- |
| `T`            |
