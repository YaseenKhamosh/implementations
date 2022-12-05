"use strict";
exports.__esModule = true;
exports.Duck = void 0;
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.Duck = function () {
    };
    Duck.prototype.performFly = function () {
        console.log('on fly');
        this.flyBehavior.fly();
    };
    Duck.prototype.perFormQuack = function () {
        console.log('one quack');
        // this.quackBehavior.quack();
    };
    Duck.prototype.swim = function () {
        console.log('I can swim!!!');
    };
    return Duck;
}());
exports.Duck = Duck;
