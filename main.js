// 2D array representing game board
let board = [['5', '4', '3', '2', '1'], 
              [], 
              []]; 

// func to print board in required format              
const printBoard = array => array.map(item => console.log('--- ' + item.join(' '))); 

//object to maintain the state of the board
const boardObj = {
  1: board[0],
  2: board[1],
  3: board[2],

  // method to move the disk
  moveDisc (startPeg, destPeg) {  
  
    //make sure arguments passed are valid pegs
    if (!boardObj.hasOwnProperty(startPeg) || !boardObj.hasOwnProperty(destPeg)) {  
      console.log('Peg does not exist.');

      // make sure last el of startPeg is < less than last el of end peg 
      } else if (boardObj[startPeg][boardObj[startPeg].length -1] > boardObj[destPeg][boardObj[destPeg].length -1]) {
        console.log('You cannot move a larger disc on top of a smaller one, board is still:');
          return printBoard(board);
      } else {

        // move the board
        boardObj[destPeg].push(boardObj[startPeg].splice(-1).join(' '));
        
        // check winning condition
          if (this.checkWinner()) {
            console.log('You win!!');

            // if wining condition is true hard-code board array to starting position
            board = [['5', '4', '3', '2', '1'], [], []];
          } else { 

            // otherwise print the current state of the board
            console.log('That move was successful, board is now: ');
            return printBoard(board);
          }
        }
  },

  // wining condition: length of peg 2 or peg3 array is equal to total number of disks
  checkWinner () {
    if (boardObj[2].length === 5 || boardObj[3].length === 5) {
      return true;
    }
 },

}; 


// Winning Game
boardObj.moveDisc(1, 3); // 1
boardObj.moveDisc(1, 2); // 2
boardObj.moveDisc(3, 2); // 3
boardObj.moveDisc(1, 3); // 4
boardObj.moveDisc(2, 1); // 5

boardObj.moveDisc(2, 3); // 6
boardObj.moveDisc(1, 3); // 7
boardObj.moveDisc(1, 2); // 8
boardObj.moveDisc(3, 2); // 9
boardObj.moveDisc(3, 1); // 10

boardObj.moveDisc(2, 1); // 11
boardObj.moveDisc(3, 2); // 12
boardObj.moveDisc(1, 3); // 13
boardObj.moveDisc(1, 2); // 14
boardObj.moveDisc(3, 2); // 15

boardObj.moveDisc(1, 3); // 16
boardObj.moveDisc(2, 1); // 17
boardObj.moveDisc(2, 3); // 18
boardObj.moveDisc(1, 2); // 19
boardObj.moveDisc(2, 3); // 20

boardObj.moveDisc(2, 1); // 21
boardObj.moveDisc(3, 2); // 22
boardObj.moveDisc(3, 1); // 23
boardObj.moveDisc(2, 1); // 24
boardObj.moveDisc(2, 3); // 25

boardObj.moveDisc(1, 3); // 26
boardObj.moveDisc(1, 2); // 27
boardObj.moveDisc(3, 2); // 28
boardObj.moveDisc(1, 3); // 29
boardObj.moveDisc(2, 1); // 30
boardObj.moveDisc(2, 3); // 31
boardObj.moveDisc(1, 3); // 32

boardObj.checkWinner();  