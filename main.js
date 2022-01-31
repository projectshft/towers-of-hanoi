

var board = {

  pegs: [["---", 5,4,3,2,1],["---"],["---"]],

 
  moveDisc (sourcePeg, targetPeg) {
    // debugger;
    sourcePeg -= 1;
    targetPeg -= 1;
    var from = board.pegs[sourcePeg]; /*references array from which disk is taken*/
    var to = board.pegs[targetPeg]; /* references array to which disk is added*/
    var fromTopDisk = from[from.length -1]; /* references last value in source array*/
    var toTopDisk = to[to.length - 1]; /*references last value in target array*/

    if (toTopDisk > fromTopDisk && fromTopDisk !== "---" || fromTopDisk !== "---" && toTopDisk === "---"){

      to.push(from.pop(fromTopDisk)); /* moves the "disk"*/
      if(board.checkWinner(board.pegs)){ /* checks if winning condition is met"*/ 
        console.log("Congratulations, you have won!");
        board.pegs = [["---", 5,4,3,2,1],["---"],["---"]];
        return;
      } 
      else{ /* if move is allowed,prints message and logs board status"*/           
      console.log('That move was successful, board is now:'); 
      board.pegs.map(function(peg){console.log(peg.join(" "));});
      return;
      }
        
    }else if /* if move is not allowed,prints  message and board status"*/  
      (toTopDisk < fromTopDisk && fromTopDisk !== "---" || fromTopDisk !== "---" && toTopDisk === "---") { 
      console.log("You cannot move a larger disc on top of a smaller one, board is still:"); 
      board.pegs.map(function(peg){console.log(peg.join(" "));});
      return;
    }
  
},


checkWinner(arr) {
  // debugger;
  winnerArr = ["---", 2,1];
  var checkArr1 = arr[1];
  var checkArr2 = arr[2];
  if ( checkArr1.length === winnerArr.length && checkArr1.every((element, index)=> element === winnerArr[index]) || checkArr2.length === winnerArr.length && checkArr2.every((element, index)=> element === winnerArr[index])) {
    return true;
  } else {return false;}
},
};

