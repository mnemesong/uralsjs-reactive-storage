import { Rec, ReactiveStorage, SetIdFunc } from "./types";

export class IncrNumReactiveStorage<M> implements ReactiveStorage<M, number> 
{
    setId: SetIdFunc<number>;
    records: Rec<M, number>[];
    reactiveFunc: (recs: Rec<M, number>[]) => void;

    constructor() {
        this.setId = (ids: number[]) => (ids.length > 0 ? Math.max(...ids) + 1 : 0);
        this.reactiveFunc = (recs) => {};
        this.records = [];
    }

    public readAll(): Rec<M, number>[] {
        return this.records;
    }

    public reinit(data: M[]): void {
        this.records = [];
        data.forEach(m => this.records.push({
            id: this.setId(this.records.map(r => r.id)),
            model: m
        }));
        this.triggerReactiveFunc();
    }

    public setReactiveFunc(renderFunc: (recs: Rec<M, number>[]) => void): void
    {
        this.reactiveFunc = renderFunc;
    }

    public triggerReactiveFunc(): void
    {
        this.reactiveFunc(this.records);
    }
}