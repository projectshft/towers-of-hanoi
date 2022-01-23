let actualBoard = [
  [5, 4 ,3 ,2, 1],
  [],
  []
];
let moves = 0;

const move = function(disc, spot) {
  //Code for using valid pegs
  if (disc > 3 || disc < 1 || spot > 3 || spot < 1 || disc === spot ) {
    return console.log('Not a valid move.');
  };

  //function for counting moves
  const moveCounter = function() {
    moves++;
    return console.log(`Number of Move(s): ${moves}`);
  };

  //function for checking wins
  const win = () => {
    if(actualBoard[1].length === 5 || actualBoard[2].length === 5) {
      alert('Congrats, you won in ' + moves + ' turns!')
      console.log("Reseting Board:");
      moves = 0;
      return actualBoard = [[5, 4, 3, 2, 1], [], []];  
    } 
  };

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
    win();
    console.log(actualBoard);
  } 
  else {
    console.log(actualBoard)
    pegDisc.push(push);
    return alert('Disc ' + push + " can't be put atop of disc " + value);
  }
  // debugger;
}
move(1, 2);
move(1, 3);
move(2, 3);
move(1, 2);
move(3, 1);
move(3, 2);
move(1, 2);
move(1, 3);
move(2, 3);
move(2, 1);
move(3, 1);
move(2, 3);
move(1, 2);
move(1, 3);
move(2, 3);
move(1, 2);
move(3, 1);
move(3, 2);
move(1, 2);
move(3, 1);
move(2, 3);
move(2, 1);
move(3, 1);
move(3, 2);
move(1, 2);
move(1, 3);
move(2, 3);
move(1, 2);
move(3, 1);
move(3, 2);
//move(1, 2)


//Need to have a check that looks at the value behind value being pushed into spot array. 
// let var = pegspot[pegspot.length]

// if(var > push) {
//   bingo
// } else {
//   bongo
// }








