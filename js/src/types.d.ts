export type Rec<M, Id> = {
    id: Id;
    model: M;
};
export type SetIdFunc<Id> = (keepedIds: Id[]) => Id;
export type ReactiveStorage<M, Id> = {
    readAll(): Rec<M, Id>[];
    reinit(data: M[]): void;
    setReactiveFunc(renderFunc: (recs: Rec<M, Id>[]) => void): void;
    triggerReactiveFunc(): void;
};
