import { Rec, ReactiveStorage, SetIdFunc } from "./types";

export class SoloDefReactiveStorage<M> implements ReactiveStorage<M, null> 
{
    def: M;
    record: Rec<M, null>;
    reactiveFunc: (recs: Rec<M, null>[]) => void;

    public constructor(def: M) {
        this.def = this.def;
        this.record = {id: null, model: def};
        this.reactiveFunc = () => {};
    }

    public readAll(): Rec<M, null>[] {
        return [this.record];
    }

    public reinit(data: M[]): void {
        this.record = {id: null, model: {...this.def}};
        data.forEach(m => this.record = {
            id: null,
            model: m
        });
        this.triggerReactiveFunc();
    }

    public setReactiveFunc(renderFunc: (recs: Rec<M, null>[]) => void): void
    {
        this.reactiveFunc = renderFunc;
    }

    public triggerReactiveFunc(): void
    {
        this.reactiveFunc([this.record]);
    }
}