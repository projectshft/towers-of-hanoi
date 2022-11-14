//The goal of Towers of Hanoi is to move a set of discs of different sizes from one peg to another while only allowing the player to take the topmost disc off the peg and not putting a larger disc on top of a smaller one
//We'll want to be able to print the board horizontally. You MUST utilize a map function at least once to accomplish this part of the assignment
//There should be an object responsible for maintaining the state of the board.
//There should be a way to move discs from one peg to another.
//There should be a checkWinner function that checks to see if the player has won the game. You win the game by putting all the discs back in the original order but on a new peg.
//Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.
 
  // takes last number off of first array (start peg) and pushed it into end peg 
  // start peg has to have at least one number (disk) 
  // if start peg length is zero. reject that move
  // if length equals zero on end peg. move is valid
  // compare last number of start peg (const = ) with last number of end peg
  // if last number of start peg is less than last number of last peg. move is valid
  // if last number of start peg is more that last number of last peg. move is invalid
  // when start peg is empty and end peg is full of discs in original order from largest to smallest player has won
  
  
  
  
  
  var Game = {
   
    board : [['5','4','3','2','1'],[],[]], 
    
    
    peg1 : this.board[0],
    peg2 : this.board[1],
    peg3 : this.board[2],
   
    

  
  
    moveDisc : function (startPeg, endPeg) {
       //  check if discs available to move
      if (startPeg.length === 0) {
        console.log('No more discs on peg');
      };
      //  check if start peg has discs and endpeg doesnt have any
      if (startPeg.length > 0 && endPeg.length === 0) {
        endPeg.push(startPeg.pop());
        console.log('Valid Move');
      };
    

      //  move disc
      if(startPeg.value < endPeg.value ) {
        endPeg.push(startPeg.pop());
        console.log('valid move');
      };

        //  check if disc being moved is larger than disc it is placed on
      if(endPeg.length > 0 && startPeg.value > endPeg.value) {
        console.log('cant move larger disc onto smaller disc');
      };
    },
  
  
  
    printBoard : function (board) {
      return board.map(function(board) {
        console.log(`--- ${board.join(' ')}`);
        return
      });
    },

    
    
    checkWinner : function (board) {
        if(this.peg2.length === 5 || this.peg3.length === 5) {
          console.log ('you are a winner!');
        }
        return this.printBoard;
      } 
  };


  // Solution
Game.moveDisc(1,2);
Game.moveDisc(1,3);
Game.moveDisc(2,3);
Game.moveDisc(1,2);
Game.moveDisc(3,1);
Game.moveDisc(3,2);
Game.moveDisc(1,2);
Game.moveDisc(1,3);
Game.moveDisc(2,3);
Game.moveDisc(2,1);
Game.moveDisc(3,1);
Game.moveDisc(2,3);
Game.moveDisc(1,2);
Game.moveDisc(1,3);
Game.moveDisc(2,3);
Game.moveDisc(1,2);
Game.moveDisc(3,1);
Game.moveDisc(3,2);
Game.moveDisc(1,2);
Game.moveDisc(3,1);
Game.moveDisc(2,3);
Game.moveDisc(2,1);
Game.moveDisc(3,1);
Game.moveDisc(3,2);
Game.moveDisc(1,2);
Game.moveDisc(1,3);
Game.moveDisc(2,3);
Game.moveDisc(1,2);
Game.moveDisc(3,1);
Game.moveDisc(3,2);
Game.moveDisc(1,2);
 
