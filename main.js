var startingPeg = ["5", "4", "3", "2", "1"];
var startingArr1 = [];
var startingArr2 = [];
var startingArr3 = [];
var originalPeg;
var playingBoard;

var randomizeArrays = function() {
    randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        originalPeg = 1;
        startingArr1 = startingPeg.map(function (element){
            return element;
        });
    } else if (randomNum === 1) {
        originalPeg = 2;
        startingArr2 = startingPeg.map(function (element) {
            return element;
        });
    } else if (randomNum === 2) {
        originalPeg = 3;
        startingArr3 = startingPeg.map(function (element){
            return element;
        });
    }    
}

var Board = function (arr1, arr2, arr3) {
    this.arr1 = arr1;
    this.arr2 = arr2;
    this.arr3 = arr3;

} 

Board.prototype.moveDisc = function (pos1, pos2) {
    var peg1 = this.arr1;
    var peg2 = this.arr2;
    var peg3 = this.arr3;   
    var peg1Value = this.arr1[this.arr1.length - 1];
    var peg2Value = this.arr2[this.arr2.length - 1];
    var peg3Value = this.arr3[this.arr3.length - 1];     
    
    if (pos1 === 1 && pos2 === 2) {   
        if (peg1Value < peg2Value || peg2Value == undefined)  {   
            console.log("Valid Move.  Board is now . . .");
            peg2.push(peg1.splice((peg1.length-1) , 1));
        } else {
            console.log("Invalid Move.  Board remains the same.");
        }
    } else if (pos1 === 1 && pos2 ===3) {
        if (peg1Value < peg3Value || peg3Value == undefined) {
            console.log("Valid Move.  Board is now . . .");
            peg3.push(peg1.splice((peg1.length-1), 1));
        } else {
            console.log("Invalid Move.  Board remains the same.");
        }
    } else if (pos1 === 2 && pos2 === 3) {
        if (peg2Value < peg3Value || peg3Value == undefined) {
            console.log("Valid Move.  Board is now . . .");
            peg3.push(peg2.splice((peg2.length-1), 1));
        } else {
            console.log("Invalid Move.  Board remains the same.");
        }        
    } else if (pos1 === 2 && pos2 === 1) {
        if (peg2Value < peg1Value || peg1Value == undefined) {
            console.log("Valid Move.  Board is now ...");
            peg1.push(peg2.splice((peg2.length-1), 1));
        } else {
            console.log("Invalid Move.  Board remains the same.");
        }        
    } else if (pos1 === 3 && pos2 === 1) {
        if (peg3Value < peg1Value || peg1Value == undefined) {
            console.log("Valid Move.  Board is now ...");
            peg1.push(peg3.splice((peg3.length-1), 1));
        } else {
            console.log("Invalid Move.  Board remains the same.");
        }            
    } else if (pos1 === 3 && pos2 === 2) {
        if (peg3Value < peg2Value || peg2Value == undefined) {
            console.log("Valid Move.  Board is now ...");
            peg2.push(peg3.splice((peg3.length-1), 1));
        } else {
            console.log("Invalid Move.  Board remains the same.");
        }             
    }

    playingBoard.print();
    playingBoard.checkWinner();
}
//Just for commit comment
Board.prototype.checkWinner = function () {    
    if (originalPeg === 1) {
        if (this.arr1.length === 0 && this.arr2.toString() === startingPeg.toString()) {
            console.log("You WIN!!!  Game board reset.");
            startGame(startingArr1, startingArr2, startingArr3);
        } else if (this.arr1.length === 0 && this.arr3.toString() === startingPeg.toString()) {
            console.log("You WIN!!!  Game board reset.");
         startGame(startingArr1, startingArr2, startingArr3);
        } else {
         console.log("Please make your next move.");
        }
    } else if (originalPeg === 2){
        if (this.arr2.length === 0 && this.arr1.toString() === startingPeg.toString()) {
            console.log("You WIN!!!  Game board reset.");
            startGame(startingArr1, startingArr2, startingArr3);
        } else if (this.arr2.length === 0 && this.arr3.toString() === startingPeg.toString()) {
            console.log("You WIN!!!  Game board reset.");
         startGame(startingArr1, startingArr2, startingArr3);
        } else {
         console.log("Please make your next move.");
        }

    } else if (originalPeg === 3) {
        if (this.arr3.length === 0 && this.arr1.toString() === startingPeg.toString()) {
            console.log("You WIN!!!  Game board reset.");
            startGame(startingArr1, startingArr2, startingArr3);
        } else if (this.arr3.length === 0 && this.arr2.toString() === startingPeg.toString()) {
            console.log("You WIN!!!  Game board reset.");
         startGame(startingArr1, startingArr2, startingArr3);
        } else {
         console.log("Please make your next move.");
        }

    }

}

var startGame = function (array1, array2, array3) {
     playingBoard = new Board(array1, array2, array3);
     playingBoard.print();
}

Board.prototype.print = function () {         
    console.log('--- ' + this.arr1.toString());
    console.log('--- ' + this.arr2.toString());
    console.log('--- ' + this.arr3.toString());
}

randomizeArrays();
startGame(startingArr1, startingArr2, startingArr3);









