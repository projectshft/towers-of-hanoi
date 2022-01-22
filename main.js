var boardArray = [["5", "4", "3", "2", "1"],
[],
[]];


var printBoard = boardArray.map(function (element) {
  return "--- " + element;
});

function display(params) {
  console.log(printBoard[0].replaceAll(","," "),`\n${printBoard[1].replaceAll(","," ")}`,`\n${printBoard[2].replaceAll(","," ")}`);
} 


var board = {
  moveDisc: function (fromPeg, toPeg) {
    var startPeg = boardArray[fromPeg - 1];
    var endPeg = boardArray[toPeg - 1];
    var travelDisc = startPeg.find(function (disc) {
      return startPeg.indexOf(disc) + 1 == startPeg.length; 
    });
    endPeg.push(travelDisc);
    startPeg.pop(travelDisc);
    
    var printBoard = boardArray.map(function (element) {
      return "--- " + element;
    });
    console.log(printBoard[0].replaceAll(","," "),`\n${printBoard[1].replaceAll(","," ")}`,`\n${printBoard[2].replaceAll(","," ")}`);
    //console.log(printBoard[0],`\n${printBoard[1]}`,`\n${printBoard[2]}`);
  }
};

board.moveDisc(1,2);
