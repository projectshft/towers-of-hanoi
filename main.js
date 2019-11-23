
//creating function to wrap game in
const Towers = function() {
  let boardMapped = [];
  let checkWinner;
  let peg;
  let disc;
  //counter function
  let moves = 0;


  let printBoard = function() {
    alert('The starting board is shown on your console:')
    console.log("--- " + boardMapped[0].join(" "));
    console.log("--- " + boardMapped[1].join(" "));
    console.log("--- " + boardMapped[2].join(" "));

  console.log(printBoard)();
  }



};








Towers();
