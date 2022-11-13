// moveDisc will allow players to say which disc they want to move to a certain peg. the purpose is to let others play the game, not solve the game for them. We will worry about the logic later

// we should not be able to move the disc if on the targeted peg we have a disc smaller than the targeted disc

// we cannot move a disc if it is not on top, rather we can only move the disk if it is the last element in the array.

// the disc can only move if it is moved to a peg that actually exists.






// let moveDisc = function(disc, peg){
//   peg = peg - 1;

//   moveIt = board.map(function(iteratorPeg){
//     iteratorPeg.map(function(value){
         
//         if(value === disc && board[peg].every(function(item){return item > disc; }) && iteratorPeg.indexOf(disc) === iteratorPeg.length -1){
//         iteratorPeg.splice(iteratorPeg.indexOf(value),1);
//         board[peg].push(disc); 
//         };
//     });
//   });
  
//   return formatter();
// };

//  console.log(moveDisc(1, 2))

 
//  console.log(checkWinner())


//This works, but it was meant to take in a disc as the first paremeter. I read the directions wrong. But I was really proud of myself for all of the array helpers and that I got it to work. I changed some things so I'm not sure it still works but I know I could get it to work.



// playGame.moveDisc(1,3), playGame.moveDisc(2,3), playGame.moveDisc(1,2), playGame.moveDisc(3,1), playGame.moveDisc(3,2), playGame.moveDisc(1,2), playGame.moveDisc(1,3), playGame.moveDisc(2,1), playGame.moveDisc(2,3), playGame.moveDisc(1,2), playGame.moveDisc(3,1), playGame.moveDisc(2,1), playGame.moveDisc(2,3), playGame.moveDisc(1,2), playGame.moveDisc(1,3), playGame.moveDisc(2,3), playGame.moveDisc(1,2), playGame.moveDisc(3,2), playGame.moveDisc(3,1), playGame.moveDisc(2,1), playGame.moveDisc(1,3), playGame.moveDisc(1,2), playGame.moveDisc(3,2), playGame.moveDisc(3,1), playGame.moveDisc(2,3), playGame.moveDisc(2,1), playGame.moveDisc(3,1), playGame.moveDisc(3,2), playGame.moveDisc(1,2), playGame.moveDisc(1,3), playGame.moveDisc(2,3), playGame.moveDisc(1,2), playGame.moveDisc(3,2), playGame.moveDisc(2,1), playGame.moveDisc(3,2), playGame.moveDisc(1,2)

//These are the moves to play the game after the initial start of console.log(playGame.moveDisc(1,2));