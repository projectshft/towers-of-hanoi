let obj ={
  boards: [[3, 2, 1], [], []],
}

let printBoard2 = obj.boards.map(x => "--- " + x)

console.log(printBoard2);


//
// const moveDisc = function (startPeg, endPeg) {
//   //below represents the last peg in the start position
//  const topDiscOnStartPeg = boards[startPeg-1][boards[startPeg-1].length-1];
//      console.log(topDiscOnStartPeg + ' = topDiscOnStartPeg');
//  //defines the topDiscOnEndPeg as a number for comparison
//  const topDiscOnEndPeg = boards[endPeg-1][boards[endPeg-1].length-1];
//      console.log(topDiscOnEndPeg + ' = topDiscOnEndPeg');
//    //checks if a disc at endPeg (if it's empty) & if (topDiscOnStartPeg < topDiscOnEndPeg)
//  if (!([endPeg-1].length === 0) && (topDiscOnStartPeg > topDiscOnEndPeg) ){
//        // return the original array before you moved it
//      console.log('you have made an illegal move!')
//      //if the move is allowed it will occur as outlined below
//  } else {
//    // this removes the last value on startPeg or topDiscOnStartPeg
// boards[startPeg-1].pop(topDiscOnStartPeg);
//    // this pushes that topDiscOnStartPeg to the endPeg if the conditions(empty array or biggerDisc) are met
// boards[endPeg-1].push(topDiscOnStartPeg)
// }
// };
//
// moveDisc(1,2);
// console.log(boards);
// moveDisc(2,3);
// console.log(boards);
// moveDisc(1,2);
// console.log(boards);

// let printBoard = function(){
//    //uses map function to create a new array
//    boards.map(function(element){
//      console.log( "---" + element);
//      console.log(" ")
//   })};
//
// const printBoard = boards.map(x => "--- " + x);
//
// console.log(printBoard);


// // let myDisc = 2;  //userInput; try for all 3 values;
//
// const pegsInObj= [
//   { pegName: 1, index:0, length: boards[0].length, topDisc: boards[0][boards[0].length-1] },
//   { pegName: 2, index:1, length: boards[1].length, topDisc: boards[1][boards[1].length-1] },
//   { pegName: 3, index:2, length: boards[2].length, topDisc: boards[2][boards[2].length-1] }
// ];
//
// const suitablePeg = pegsInObj.filter(function(peg){
//  return  peg.length===0 || peg.topDisc > myDisc;
//  });
//
//
//  const suitablePeg = function (myDisc){
//    let suitablePegObjectInArray = [
//      { pegName: 1, index:0, length: boards[0].length, topDisc: boards[0][boards[0].length-1] },
//      { pegName: 2, index:1, length: boards[1].length, topDisc: boards[1][boards[1].length-1] },
//      { pegName: 3, index:2, length: boards[2].length, topDisc: boards[2][boards[2].length-1] }
//    ];
//    const suitablePegFilterFunction = suitablePegObjectInArray.filter(function(peg){
//     return  peg.length===0 || peg.topDisc > myDisc;
//     });
//
//   console.log(suitablePegFilterFunction);
//  }
//
// console.log(suitablePeg2(1));
//
//


// const checkWinner= function () {
//   //logs the single board as a winningBoard
//   //using the reduce method to turn an array of arrays into a single array
//   let winningBoard = boards.reduce(function(total, amount) {
//     // if (boards[1] = [3,2,1] || boards[2] = [3,2,1]) {
//         {
//         return total.concat(amount);
//     }
//     //uses concat to combine multiple arrays into one
//     return total.concat(amount);
//   }, []);
//   console.log(winningBoard);
//   // if it looks like on [3,2,1 on peg2 or peg3]
//   if(winningBoard === [3,2,1]){
//       console.log('you have won the game!')
//   }
//   //using the reduce method to turn arrays into a sum
//   let sum = winningBoard.reduce(function(total, amount){
//     return total + amount;
//   }, 0);
//     //logs the total number of values should always equal 6.
//     console.log(sum);
// };
//
// checkWinner();
