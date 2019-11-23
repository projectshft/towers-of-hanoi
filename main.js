
//creating function to wrap game in
const Towers = function() {
  let board = [["3", "2", "1"],[],[]];
  let checkWinner;
  let peg;
  let disc;
  //counter function
  let moves = 0;


  var printBoard = function() {
    alert('The starting board is shown on your console:')
    return board.map(function (peg) {
      console.log("---", ...peg);

    });
  };
  //starting board print test - works in console
  printBoard();





};








Towers();
