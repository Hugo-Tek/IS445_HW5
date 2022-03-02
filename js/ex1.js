class Square {
    constructor(side) {
        this.side = side;
    }
    
    get describe() {
        return `Square with side ${this.side} has perimiter of ${this.perimiter()}, area of ${this.area()}, and diagonal of ${this.diagonal().toFixed(3)}`
    }
    perimiter() {
        return this.side * 4;
    }
    
    area() {
        return this.side ** 2;
    }
    
    diagonal() {
        return Math.sqrt(2 * (this.side ** 2));
    }
    
}

var square1 = new Square(2);
var square2 = new Square(4);
var square3 = new Square(10);
console.log(square1.describe);
console.log(square2.describe);
console.log(square3.describe);