var board = [["5", "4", "3", "2", "1"],
[],
[]]

var printBoard = function() {
  var boardString = board.map(function(positions){
    return '--- ' + positions.toString() ;
  })
  console.log(boardString.join("\n"))
}

printBoard();