
let actualBoard = [
  [5, 4 ,3 ,2 ,1],
  [],
  []
];


const move = function(disc, spot) {
  if (disc > 3 || disc < 0 || spot > 3 || spot < 0) {
    return console.log('Not a valid peg');
  }
  //Code for counting moves
  const moveCounter = function() {
    let moves = 0;
    moves++;
    return console.log(`Number of Moves: ${moves}`);
  }


  //Code for cutting the disc from peg
  let pegDisc = actualBoard[disc - 1];
  let push = pegDisc.pop();
  actualBoard[disc -1] = pegDisc;


  //Code for putting disc in peg
  let pegSpot = actualBoard[spot - 1];
  pegSpot.push(push);
  actualBoard[spot -1] = pegSpot;

  console.log(actualBoard)
  moveCounter();


  
}







