# uralsjs-reactive-storage
Reactive storages types and examples


## API
```typescript
/**
 * Abstract type for keepeing data as id-value-pair on generic types
 */
export type Rec<M, Id> = {
    id: Id,
    model: M
};

/**
 * Abstract type of setId function used in storages
 */
export type SetIdFunc<Id> = (keepedIds: Id[]) => Id;

/**
 * Reactive storage abstract type
 */
export type ReactiveStorage<M, Id> = {
    readAll(): Rec<M, Id>[],
    reinit(data: M[]): void,
    setReactiveFunc(renderFunc: (recs: Rec<M, Id>[]) => void): void,
    triggerReactiveFunc(): void
};

/***
 * Storage keeps data as numeric-id Recs with auto-increment Id generation function
 */
export class IncrNumReactiveStorage<M> implements ReactiveStorage<M, number>
{...};

/**
 * Storage keeps only one record with null-id
 */
export class SoloDefReactiveStorage<M> implements ReactiveStorage<M, null>
{...};
```

## Author
Anatoly Starodubtsev
tostar74@mail.ru

## License
MIT