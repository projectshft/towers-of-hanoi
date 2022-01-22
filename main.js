
let actualBoard = [
  [5, 4 ,3 ,2, 1],
  [],
  []
];


const move = function(disc, spot) {
  //Code for using valid pegs
  if (disc > 3 || disc < 0 || spot > 3 || spot < 0) {
    return console.log('Not a valid peg');
  }

  //function for counting moves
  const moveCounter = function() {
    let moves = 0;
    moves += 0;
    return console.log(`Number of Moves: ${moves}`);
  }
  //Code for cutting the disc from peg
  let pegDisc = actualBoard[disc - 1];
  let push = pegDisc.pop();
  actualBoard[disc -1] = pegDisc;

  //Code for putting disc in peg + disc order correct
  let pegSpot = actualBoard[spot - 1];
  let value = pegSpot[pegSpot.length -1];
  if(value > push || value === undefined) {
    pegSpot.push(push);
    actualBoard[spot -1] = pegSpot;
    moveCounter();
    console.log(actualBoard);
  } 
  else {
    console.log(actualBoard)
    pegDisc.push(push);
    return alert('Disc ' + push + " can't be put atop of disc " + value);
  }
  
}

//Need to have a check that looks at the value behind value being pushed into spot array. 
// let var = pegspot[pegspot.length]

// if(var > push) {
//   bingo
// } else {
//   bongo
// }








