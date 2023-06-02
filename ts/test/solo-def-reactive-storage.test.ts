import { SoloDefReactiveStorage } from "../src/index";
import * as assert from "assert";
import { it, describe } from "mocha";

describe("test solo-def-reactive-storage", () => {
    it("test  1", () => {
        const glob = {val: ""};
        const stor = new SoloDefReactiveStorage({it: ""});
        assert.deepEqual(stor.readAll(), [{id: null, model: {it: ""}}]);
        stor.reinit([{it: "xxx"}, {it: "yyy"}]);
        assert.deepEqual(stor.readAll(), [{id: null, model: {it: "yyy"}}]);
        assert.deepEqual({val: ""}, glob);
        stor.setReactiveFunc((recs) => {
            recs.forEach(e => {
                glob.val = glob.val + e.model.it;
            });
        });
        stor.reinit([{it: "xxx"}, {it: "yyy"}]);
        assert.deepEqual({val: "yyy"}, glob);
    })
});