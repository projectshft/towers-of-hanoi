var board = [
  ["5", "4", "3", "2", "1"],
  [],
  []
]

var printBoard = function (arr) {
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i])
      console.log("--- " + arr[i].join(' '));
    else 
      console.log("--- ");
  }
}

printBoard(board);
