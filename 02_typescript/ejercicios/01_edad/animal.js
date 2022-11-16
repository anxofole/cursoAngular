"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    //   protected name: string;
    //   protected age: number;
    //   constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    //   }
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.printAge = function () {
        console.log("".concat(this.name, " is ").concat(this.age, " years old"));
    };
    return Animal;
}());
exports.Animal = Animal;
