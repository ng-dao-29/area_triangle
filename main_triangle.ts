import {Triangle} from "./Triangle";

let triangl = new Triangle(1,3,5," Triangl","red");

if(triangl.getPerimeter() > 0) {
    console.log(triangl.getPerimeter());
    console.log(triangl.getArea());
}
else {
    console.log("số liệu ko hợp lệ.");
}
