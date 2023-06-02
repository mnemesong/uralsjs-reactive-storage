"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoloDefReactiveStorage = void 0;
var SoloDefReactiveStorage = /** @class */ (function () {
    function SoloDefReactiveStorage(def) {
        this.def = this.def;
        this.record = { id: null, model: def };
        this.reactiveFunc = function () { };
    }
    SoloDefReactiveStorage.prototype.readAll = function () {
        return [this.record];
    };
    SoloDefReactiveStorage.prototype.reinit = function (data) {
        var _this = this;
        this.record = { id: null, model: __assign({}, this.def) };
        data.forEach(function (m) { return _this.record = {
            id: null,
            model: m
        }; });
        this.triggerReactiveFunc();
    };
    SoloDefReactiveStorage.prototype.setReactiveFunc = function (renderFunc) {
        this.reactiveFunc = renderFunc;
    };
    SoloDefReactiveStorage.prototype.triggerReactiveFunc = function () {
        this.reactiveFunc([this.record]);
    };
    return SoloDefReactiveStorage;
}());
exports.SoloDefReactiveStorage = SoloDefReactiveStorage;
