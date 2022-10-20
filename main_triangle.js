"use strict";
exports.__esModule = true;
var Triangle_1 = require("./Triangle");
var triangl = new Triangle_1.Triangle(1, 3, 5, " Triangl", "red");
if (triangl.getPerimeter() !== -1) {
    console.log(triangl.getPerimeter());
    console.log(triangl.getArea());
}
else {
    console.log("số liệu ko hợp lệ.");
}
