import {Shape} from "./Shape";

export class Triangle extends Shape {
    protected side1: number;
    protected side2: number;
    protected side3: number;
    constructor(side1:number,side2:number,side3:number,name:string,color:string) {
        super(name,color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    checkTriangle():boolean {
        if(this.side1+this.side2>this.side3
            &&this.side2+this.side3>this.side1
            &&this.side3+this.side1>this.side2) {
            return true
        }else {
            return false
        }
    }

    getArea():number{
        if (this.checkTriangle()) {
             let p = this.getPerimeter()/2;
             return Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3))
        }
        else {
            return -1
        }
    }

    getPerimeter(): number {
        if(this.checkTriangle()) {
            return this.side1 + this.side2 + this.side3;
        }
        else {
            return -1
        }
    }
}