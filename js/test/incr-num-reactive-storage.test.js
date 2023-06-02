"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var assert = __importStar(require("assert"));
var mocha_1 = require("mocha");
(0, mocha_1.describe)("test solo-def-reactive-storage", function () {
    (0, mocha_1.it)("test  1", function () {
        var glob = { val: "" };
        var stor = new index_1.IncrNumReactiveStorage();
        assert.deepEqual(stor.readAll(), []);
        stor.reinit([{ it: "xxx" }, { it: "yyy" }]);
        assert.deepEqual(stor.readAll(), [
            { id: 0, model: { it: "xxx" } },
            { id: 1, model: { it: "yyy" } }
        ]);
        assert.deepEqual({ val: "" }, glob);
        stor.setReactiveFunc(function (recs) {
            recs.forEach(function (e) {
                glob.val = glob.val + e.model.it;
            });
        });
        stor.reinit([{ it: "xxx" }, { it: "yyy" }]);
        assert.deepEqual({ val: "xxxyyy" }, glob);
    });
});
