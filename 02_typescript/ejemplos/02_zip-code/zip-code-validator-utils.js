"use strict";
exports.__esModule = true;
exports.ZipCodeValidator = exports.numberRegexp = void 0;
var LENGTH = 5;
exports.numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isValid = function (s) {
        return s.length === LENGTH && exports.numberRegexp.test(s);
    };
    ZipCodeValidator.prototype.isAcceptable1 = function (s) {
        return this.isValid(s);
    };
    ZipCodeValidator.prototype.isAcceptable2 = function (s) {
        return this.isValid(s);
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
