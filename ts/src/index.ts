import * as types from "./types";
import * as soloDef from "./solo-def-reactive-storage";
import * as incrNum from "./incr-num-reactive-storage";

export type Rec<M, Id> = types.Rec<M, Id>;

export type SetIdFunc<Id> = types.SetIdFunc<Id>;

export type ReactiveStorage<M, Id> = types.ReactiveStorage<M, Id>;

export class SoloDefReactiveStorage<M> extends soloDef.SoloDefReactiveStorage<M>
{};

export class IncrNumReactiveStorage<M> extends incrNum.IncrNumReactiveStorage<M>
{};

