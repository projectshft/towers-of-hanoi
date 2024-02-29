
let changingArray = [[5, 4, 3, 2, 1],[],[]];
const winningArray = [[],[5, 4, 3, 2, 1],[]];
const winningArray2 = [[],[],[5, 4, 3, 2, 1]];

const statusObj = {
  totalMoves: 0,
  status: "Playing"
};


let printBoard = function (array) {
  array.map(function () {
    console.log(`--- ${array[0].join(" ")}
    \n--- ${array[1].join(" ")}
    \n--- ${array[2].join(" ")}`);
  });
};

const checkWinner = function () {
  if (changingArray[1].toString() === winningArray[1].toString() || changingArray[2].toString() === winningArray2[2].toString()) {
    console.log('You have won the game! Congratulations!');
    changingArray = [[5, 4, 3, 2, 1],[],[]];
    statusObj.status = "Won";
    console.log(statusObj);
    statusObj.totalMoves = 0;
  }
};

const moveDisc = function (pickFrom, moveTo) {
  if (pickFrom > 0 && pickFrom <= changingArray.length && typeof pickFrom === 'number' && moveTo > 0 && moveTo <= changingArray.length && typeof moveTo === 'number') {
    let checkNumber = changingArray[pickFrom - 1][changingArray[pickFrom - 1].length -1];
    let checkNumber2 = changingArray[moveTo - 1][changingArray[moveTo - 1].length -1] ;   
    if(checkNumber < checkNumber2 || checkNumber2 === undefined){
      let movingNumber = changingArray[pickFrom - 1].pop();
      changingArray[moveTo -1].push(movingNumber);
      console.log('That move was succesful, board is now:');
      statusObj.totalMoves ++;
      statusObj.status = "Playing";
      printBoard(changingArray);
      checkWinner()
    }
    else {
      console.log('You cannot move a larger disc on top of a smaller one, board is still:')
      printBoard(changingArray)
    };
  }
  else {
    console.log('Please make sure your arguments are either the number 1, 2, or 3.')
    printBoard(changingArray)
  };
};

console.log("Welcome to Towers of Hanoi. Please use the command 'moveDisc(1,2)' to move the numbers from peg to peg. The first number in the command will be the peg you pull from and the second number will be the peg you move to. To win the game you need to get all 5 numbers on either the 2nd or 3rd peg. Be warned you cannot place a bigger number on top of a smaller number. Have fun!");
printBoard(changingArray);
