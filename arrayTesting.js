//define the basic 2D board array
//why did i use strings?
const startingBoard = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"]
];

//what about separate simple arrays for each row?
const row1 = [1, 2, 3];
const row2 = [4, 5, 6];
const row3 = [7, 8, 9];

//using map seems like the "right" way to do it -- don't mutate the original array
//that makes it easier to reset the state later
const updatedBoard = startingBoard.map(item => {
  if(item === startingBoard["1"]) {
    item = "0";
  }
  return item;
});

//display the 2d array
function boardDisplay(array) {
  console.log("Here's the current board:")
  console.log(array.join("\n").replace(/,/g, "") + "\n");
}

//display a single row
function simpleBoardDisplay(array) {
  console.log("Here's the current board:")
  console.log(row1.join().replace(/,/g, "") + "\n");
}

console.log(simpleBoardDisplay(row1));
console.log(simpleBoardDisplay(row2));
console.log(simpleBoardDisplay(row3));
