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
exports.Dog = void 0;
var animal_1 = require("./animal");
var BIGYEAR = 8;
var SMALLYEAR = 6;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // private isBig: boolean;
    // constructor (name: string, age: number, isBig: boolean) {
    //     super(name, age);
    //     this.isBig = isBig;
    // }
    function Dog(name, age, isBig) {
        var _this = _super.call(this, name, age) || this;
        _this.isBig = isBig;
        return _this;
    }
    Dog.prototype.turnYear = function () {
        this.age += this.isBig ? BIGYEAR : SMALLYEAR;
    };
    return Dog;
}(animal_1.Animal));
exports.Dog = Dog;
