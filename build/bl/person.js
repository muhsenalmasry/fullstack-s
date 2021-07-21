"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
var person = /** @class */ (function () {
    function person(fn, ln, age) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
    }
    Object.defineProperty(person.prototype, "Age", {
        get: function () {
            return this.age;
        },
        set: function (age) {
            if (age < 0 || age > 100)
                throw 'Age setting error!';
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    person.prototype.toString = function () {
        var msg = this.fullName();
        if (this.age !== null && !isNaN(this.age))
            msg += " age: " + this.age;
        return msg;
    };
    return person;
}());
exports.person = person;
