var socket = io()
var matrix = [];

side = 30;


function setup() {
    frameRate(15);
    
    createCanvas(20 * side, 20 * side);
    background('#acacac');
}


function nkarel(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("gray");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }


        }
    }
}



setInterval(function () {
    socket.on("send matrix", nkarel)
},1000)