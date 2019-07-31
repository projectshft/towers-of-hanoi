//  Requirements: 
// 1. Make board using a 2D array
//     -Nested array
// 2. Use MAP FUNCTION  to make board horizontal  
// 3. Player must submit moves 
//     -board.moveDisc(1,2)
// 4. Must only move top piece and cannot have move a larger piece on top of a smaller piece.
// 5. Object responsible for maintaining state of board. 
// 6. FILTER to determine the tops that a disc can be moved to.
// 7. Check winner for win state. All pegs in order on another peg. REDUCE FUNCITON 
// 8. Anounce winner through console log and reset new game. 


var initialBoard = [[3,2,1], [], []];
var board = {
  moveDisc: function(initialPeg, endPeg) {
    var currentDisc = initialBoard[initialPeg -1].pop();
    if(currentDisc > initialBoard[endPeg-1].slice(-1)[0]){
      alert("Invalid Move!")
      initialBoard[initialPeg -1].push(currentDisc);
      return
    }
    initialBoard[endPeg -1].push(currentDisc);
    var filterChecker = initialBoard.filter(peg => peg.slice(-1)[0] < currentDisc);
    console.log(filterChecker);
  }



};

