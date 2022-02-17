// let movie_title: string = "Titanic 2 2022"
// let age: number = 22
// let bool: boolean = true
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
// console.log(movie_title, age, bool)
// let array: number [] = [10, 20, 30]
//
// type UserId = number
// type UserFirstName = string
// type UserLastName = string
// type UserIsActive = boolean
//
// type User = {
//     id: UserId,
//     first_name: UserFirstName,
//     last_name: UserLastName,
//     is_active: UserIsActive
// }
// let user: User = {
//     id: 1,
//     first_name: "Radoslav",
//     last_name: "Semov",
//     is_active: true
// }
//
// console.log(user)
var CAR_TYPE;
(function (CAR_TYPE) {
    CAR_TYPE["SEDAN"] = "Sedan";
    CAR_TYPE["ESTATE"] = "Estate";
    CAR_TYPE["HATCHBACK"] = "Hatchback";
    CAR_TYPE["COUPE"] = "Coupe";
})(CAR_TYPE || (CAR_TYPE = {}));
var Car = /** @class */ (function () {
    function Car() {
        this.type = CAR_TYPE.SEDAN;
    }
    Car.prototype.setType = function (type) {
        this.type = type;
    };
    Car.prototype.getType = function () {
        return this.type;
    };
    return Car;
}());
// const car = new Car();
// car.setType(CAR_TYPE.ESTATE)
// console.log(car.getType())
var FERRARI_COLOR;
(function (FERRARI_COLOR) {
    FERRARI_COLOR["PINK"] = "pink";
    FERRARI_COLOR["YELLOW"] = "yellow";
    FERRARI_COLOR["GRAY"] = "gray";
})(FERRARI_COLOR || (FERRARI_COLOR = {}));
var Ferrari = /** @class */ (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari() {
        var _this = _super.call(this) || this;
        _this.color = FERRARI_COLOR.GRAY;
        return _this;
    }
    Ferrari.prototype.setColor = function (color) {
        this.color = color;
    };
    Ferrari.prototype.getColor = function () {
        return this.color;
    };
    return Ferrari;
}(Car));
var ferrari = new Ferrari();
ferrari.setType(CAR_TYPE.COUPE);
// console.log(ferrari.getType())
// console.log(ferrari.getColor())
