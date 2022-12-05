"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Physical = void 0;
var Basehandler_1 = require("./Basehandler");
var Request_1 = require("./Request");
var Physical = /** @class */ (function (_super) {
    __extends(Physical, _super);
    function Physical() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Physical.prototype.handle = function (request) {
        console.log("Physical");
        Request_1.Request.message += "," + request.shift();
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    };
    Physical.prototype.handleDecode = function (request) {
        console.log("Physical");
        Request_1.Request.decodeMessage.unshift(request.split(",")[6]);
        if (this.nextHandler) {
            this.nextHandler.handleDecode(request);
        }
    };
    return Physical;
}(Basehandler_1.Base));
exports.Physical = Physical;
