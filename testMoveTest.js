let boardState = [   // a basic 3x3 board
  ['1'],
  ['3', '2'],
  []
];

/* var testMove = function(start) {  // REQ's = use FILTER at least once. return array of valid moves
    console.log('testMove() called');
  console.table(boardState);
    //console.log(boardState[start-1]);
    //console.log(boardState[start-1][2]);
    //console.log((boardState[start-1].length)-1);
    // console.log('get the disc size ' + boardState[start-1][(boardState[start-1].length)-1]);
    
    let currentDiscSize = boardState[start-1][(boardState[start-1].length)-1];  // gonna need error checking for empty peg
                                                                                // is this really the best way to get it?
    console.log('currentDiscSize = ' + currentDiscSize);
    let startCheck = 0;  // can move into filter? let's see
    let response = [];   
    response = boardState.filter(function(element) {  //TODO do this without filter first!!!
      if (startCheck === start - 1) { //we are on the peg we are wanting to move from TODO turn into case??
        console.log('testMove is skipping current peg as it is start peg');
        startCheck++;
        return 0; // something? zero?  
        } 
      if (element[(element.length-1)] > currentDiscSize) {   // where we want to move has bigger disc, not valid
        console.log('testMove says this move is no good');
        startCheck++;
        return 0;
        }
      if (element[(element.length-1)] < currentDiscSize || !(element[(element.length-1)])) {// valid move (smaller or empty)
        
          console.log('testMove says move is good, sending peg back');
          startCheck++; //so, this is cuz filter doesn't give me the loop and it will be human-readable peg
          return startCheck;
        }
       
      return response;
    });
    // I think everything I say down here is wrong.
    //get value of disc to move (startDisc)     --- this is my thought, but we need to 
    //get value of destination spot (or no disc = 0, maybe) (destDisc) --- filter and return all valid
    //if value of startDisc valid, there's a disc to move. Else false.  -- pegs. then on return look
    //if value of startDisc < destDisc || destDisc === 0, move true --- for array to .includes() destPeg
    return response;
  } */

  var testMove = function(start) {
    let currentDiscSize = boardState[start-1][(boardState[start-1].length)-1];
    console.log(currentDiscSize + ' : currentDiscSize detected');
    let response = [];  // test each row one at a time, if it's valid, add to valid array
    let validMoves = [];  // ultimately return this, where it gets tested by .includes()
    for (let boardIndex = 0; boardIndex < boardState.length; boardIndex++) {
    console.log('aye aye is ' + boardIndex);
      if ( start-1 === boardIndex) { // moving to current peg not valid
        validMoves.push(0);  // could be '' or anything not a peg number
      } else if (boardState[boardIndex][boardState[boardIndex].length-1] > currentDiscSize || !boardState[boardIndex][boardState[boardIndex].length-1]) {
        validMoves.push(boardIndex+1); // +1 because human readable peg number
      } else {
        validMoves.push(0);
      }
      return validMoves;
    }
      console.log('validMoves contains: ' + validMoves);
    // response = boardState[i].filter(function(element){  // finding it hard to need filter
      // console.log('element ' + element);

      // if (start-1 === peg) {  // test for are we looking at current peg
      //   return false;   // can't move onto current peg 
      // }
      //if the last element in this array is < current disc size or empty, return this index
      
      
      //if the last element in this array is > current disc size, return false


      }


  testMove(2);
