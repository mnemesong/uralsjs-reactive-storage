import { Rec, ReactiveStorage } from "./types";
export declare class SoloDefReactiveStorage<M> implements ReactiveStorage<M, null> {
    def: M;
    record: Rec<M, null>;
    reactiveFunc: (recs: Rec<M, null>[]) => void;
    constructor(def: M);
    readAll(): Rec<M, null>[];
    reinit(data: M[]): void;
    setReactiveFunc(renderFunc: (recs: Rec<M, null>[]) => void): void;
    triggerReactiveFunc(): void;
}
