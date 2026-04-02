let board = [[5, 4, 3, 2, 1], [], []];

// Log the starting board to the console using the map function
let startingBoard = board.map(function (tower) {
  return "--- " + tower.join(" ");
});

for (let i = 0; i < startingBoard.length; i++) {
  console.log(startingBoard[i]);
}

// Object to maintain state of the board:
let boardObj = {
  1: [5, 4, 3, 2, 1],
  2: [],
  3: [],
};

// Check Winner Function
let checkWinner = function (object) {
  let result = "No Winner Yet";

  Object.values(object).forEach(function (tower, index) {
    if (tower.length === board[0].length && index !== 0) {
      let isWinner = tower.every(function (value, index) {
        return value === board[0][index];
      });

      if (isWinner) {
        result = "We Have a Winner!";
      }
    }
  });

  return result;
};


//Function that allow us to use the disc 
let moveDisc = function (start, end) {
  if ([1, 2, 3].includes(start) && [1, 2, 3].includes(end)) {
    let poppedItem = boardObj[start].pop();
    boardObj[end].push(poppedItem);

    let boardCurrent = Object.values(boardObj).map(function (tower) {
      return "--- " + tower.join(" ");
    });

    boardCurrent.forEach(function (item) {
      console.log(item);
    });

    let win = checkWinner(boardObj);
    return win;
  } else {
    console.log("Please enter either 1,2, or 3 for both start and end");
  }
};

moveDisc(1, 3);

for (let [key, value] of Object.entries(boardObj)) {
  console.log("key:", key);
  console.log("value:", value);
}

moveDisc(1, 2);

// moveDisc(1, 2);

//Function to insert pegs

let insertPeg = function (numNew) {
  let sum = Object.keys(boardObj).reduce(function (accumulator) {
    return accumulator + 1;
  }, 0);

  let runLength = sum + numNew;

  for (let i = sum + 1; i <= runLength; i++) {
    boardObj[i] = [];
  }

  return boardObj;
};

console.log(insertPeg(4));

//   for(let i = 0; i < numNew.length; i++){

//   }
// };

// let recurFunc = function (key) {

//   if (boardObj[key] === '[5, 4, 3, 2, 1]') {
//     return move;
//   }else(){

//   }
// };

// Running Game Logic:

// while (!gameOver) {
//   let start = parseInt(prompt("Enter start peg (1-3"));
//   let end = parseInt(prompt("Enter end peg (1-3)"));

//   result = moveDisc(start, end);
//   console.log(result);

//   if (result === "We Have a Winner!") {
//     gameOver = true;
//   }
// }
