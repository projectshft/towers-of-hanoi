//The goal of Towers of Hanoi is to move a set of discs of different sizes from one peg to another while only allowing the player to take the topmost disc off the peg and not putting a larger disc on top of a smaller one
//We'll want to be able to print the board horizontally. You MUST utilize a map function at least once to accomplish this part of the assignment
//There should be an object responsible for maintaining the state of the board.
//There should be a way to move discs from one peg to another.
//There should be a checkWinner function that checks to see if the player has won the game. You win the game by putting all the discs back in the original order but on a new peg.
//Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.
//As a bonus, any time you iterate through an array, try and refrain from using for or while loops - instead try to use the Array helper methods.



var peg1 = board[0];
var peg2 = board[1];
var peg3 = board[2];


const game = { board: [[5, 4, 3, 2, 1], [], []],
               
              moveDisc: function (startPeg, endPeg) {
                if (board[0].length === 5) {
                  console.log('Please move top disk to empty peg')
                }

                if (disk == 1) {
                  this.board[0].pop;
                  this.board[3].push
                }

                return this.board;
              },
               
              
              
              printBoard: function (board) { 
                




              },
            
             checkWinner: function () {
                if(board[1].length === 5) {
                  console.log ('you are a winner!');
                }

             }
            
            }
 
 
 

















// Move the disc from peg 1 to peg 2
moveDisc(1, 2);
That move was successful, board is now:
--- 5 4 3 2
--- 1
---

// Move disc from peg 1 to peg 3
moveDisc(1, 3);
That move was successful, board is now:
--- 5 4 3
--- 1
--- 2

// Move disc from peg 1 to peg 2
moveDisc(1, 2);
You cannot move a larger disc on top of a smaller one, board is still:
--- 5 4 3
--- 1
--- 2