let LivingCreature  = require("./livingcreature.js")

module.exports = class Whater extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 10;
        this.multiply = 0;
    }

    chooseCell(ch){
        this.getNewCoordinates()
        return super.chooseCell(ch)
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        
    }

    mul() {
        this.multiply++;
        
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[ Math.floor(Math.random() * emptyCells.length) ] ;

        if (newCell && this.multiply >= 3) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;
            console.log(matrix);
            

            var newWhater = new Whater(newX, newY);
            WhaterArr.push(newWhater);
            console.log(WhaterArr);
            this.multiply = 0;
        }
    }
    move() {
        this.energy--
        var emptyCells = this.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.energy >= 0) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0

            
            this.x = newX
            this.y = newY
        }
        else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }

    eat() {
        var emptyCells = this.chooseCell(4)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in fireArr) {
                if (this.x == fireArr[i].x && this.y == fireArr[i].y) {

                    fireArr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this.move()
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in WhaterArr) {
            if (this.x == WhaterArr[i].x && this.y == WhaterArr[i].y) {
                WhaterArr.splice(i, 1);
                break;
            }
        }
    }
}