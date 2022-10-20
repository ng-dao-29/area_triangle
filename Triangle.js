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
exports.Triangle = void 0;
var Shape_1 = require("./Shape");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(side1, side2, side3, name, color) {
        var _this = _super.call(this, name, color) || this;
        _this.side1 = side1;
        _this.side2 = side2;
        _this.side3 = side3;
        return _this;
    }
    Triangle.prototype.checkTriangle = function () {
        if (this.side1 + this.side2 > this.side3
            && this.side2 + this.side3 > this.side1
            && this.side3 + this.side1 > this.side2) {
            return true;
        }
        else {
            return false;
        }
    };
    Triangle.prototype.getArea = function () {
        if (this.checkTriangle()) {
            var p = this.getPerimeter() / 2;
            return Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
        }
        else {
            return -1;
        }
    };
    Triangle.prototype.getPerimeter = function () {
        if (this.checkTriangle()) {
            return this.side1 + this.side2 + this.side3;
        }
        else {
            return -1;
        }
    };
    return Triangle;
}(Shape_1.Shape));
exports.Triangle = Triangle;
