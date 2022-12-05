"use strict";
exports.__esModule = true;
exports.Base = void 0;
var Base = /** @class */ (function () {
    function Base() {
        this.message = "";
    }
    Base.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    Base.prototype.handle = function (request) {
        throw new Error("Method not implemented.");
    };
    Base.prototype.handleDecode = function (request) {
        throw new Error("Method not implemented.");
    };
    return Base;
}());
exports.Base = Base;
