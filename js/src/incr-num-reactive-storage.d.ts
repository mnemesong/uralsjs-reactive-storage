import { Rec, ReactiveStorage, SetIdFunc } from "./types";
export declare class IncrNumReactiveStorage<M> implements ReactiveStorage<M, number> {
    setId: SetIdFunc<number>;
    records: Rec<M, number>[];
    reactiveFunc: (recs: Rec<M, number>[]) => void;
    constructor();
    readAll(): Rec<M, number>[];
    reinit(data: M[]): void;
    setReactiveFunc(renderFunc: (recs: Rec<M, number>[]) => void): void;
    triggerReactiveFunc(): void;
}
