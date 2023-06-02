"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncrNumReactiveStorage = void 0;
var IncrNumReactiveStorage = /** @class */ (function () {
    function IncrNumReactiveStorage() {
        this.setId = function (ids) { return (ids.length > 0 ? Math.max.apply(Math, ids) + 1 : 0); };
        this.reactiveFunc = function (recs) { };
        this.records = [];
    }
    IncrNumReactiveStorage.prototype.readAll = function () {
        return this.records;
    };
    IncrNumReactiveStorage.prototype.reinit = function (data) {
        var _this = this;
        this.records = [];
        data.forEach(function (m) { return _this.records.push({
            id: _this.setId(_this.records.map(function (r) { return r.id; })),
            model: m
        }); });
        this.triggerReactiveFunc();
    };
    IncrNumReactiveStorage.prototype.setReactiveFunc = function (renderFunc) {
        this.reactiveFunc = renderFunc;
    };
    IncrNumReactiveStorage.prototype.triggerReactiveFunc = function () {
        this.reactiveFunc(this.records);
    };
    return IncrNumReactiveStorage;
}());
exports.IncrNumReactiveStorage = IncrNumReactiveStorage;
