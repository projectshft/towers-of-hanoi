//build game board for towers of hanoi
//1. board has to be 2D array
//2. must utilize MAP to print board HORIZONTALLY at least once

//3. player submits moves to game --> function called moveDisc(sp, ep)
  // and updates board if allowed
//4. an object is responsible for maintaining the board
//5. should be a way to move discs from one peg to another
//6. should be a checkWinner function
//7. if winner--> game resets automatically and prints the win (use console.log)
//8. NO for or while loops to iterate througn an array
  //must use array helper methods except forEach




//var board = towersOfHanoi.board;

var towersOfHanoi = {
  
  startBoard: [
    [5, 4, 3, 2, 1],
    [],
    []
  ],

  playingBoard: [
    [5, 4, 3, 2, 1],
    [],
    []
  ],

  //add checkWinner fxn. maybe use FIND to find winner after each move???
    //see if you can print start boar along witn it? 

  checkWinner: function() {
    var board = this.playingBoard;
    var winner = board.find(function(pegs) {
      return board[1].length === 5 || board[2].length === 5
    });

    if(winner) {
      console.log('You Won! Play Again?');
      //
    };
    
  },

  moveDisc: function(startPeg, endPeg) {
    //adjusts parameters so they can act on the correct index
    startPeg -= 1;
    endPeg -= 1; 
    
    var board = this.playingBoard; 
    var start = board[startPeg];
    var end = board[endPeg]; 
  
    //logic to moveDisc
    if(end.length === 0 || start[start.length-1] < end[end.length-1]) {
      end.push(start.pop());
      
      printBoard(); 
      this.checkWinner();

    } else {
      console.log('That move is not allowed! Try again.')
    }
  },
};

  
//prints board to console horizontally
//add logic to be able to print starting board for reset after a winner?  
var printBoard = function() {
    var gameBoard = towersOfHanoi['playingBoard'].map(function (pegs) {
      return console.log('--- ' + pegs.join(' '))  
    });
  console.log('Great move. Where to next?')
  return gameBoard; 
};



//play
towersOfHanoi.moveDisc(1,2); //1
towersOfHanoi.moveDisc(1,3);//2
towersOfHanoi.moveDisc(2,3);//3
towersOfHanoi.moveDisc(1,2);//4
towersOfHanoi.moveDisc(3,1);//5
towersOfHanoi.moveDisc(3,2);//6
towersOfHanoi.moveDisc(1,2);//7
towersOfHanoi.moveDisc(1,3);//8
towersOfHanoi.moveDisc(2,3);//9
towersOfHanoi.moveDisc(2,1);//10
towersOfHanoi.moveDisc(3,1);//11
towersOfHanoi.moveDisc(2,3);//12
towersOfHanoi.moveDisc(1,2);//13
towersOfHanoi.moveDisc(1,3); //14
towersOfHanoi.moveDisc(2,3);//15
towersOfHanoi.moveDisc(1,2);//16
towersOfHanoi.moveDisc(3,1);//17
towersOfHanoi.moveDisc(3,2);//18           
towersOfHanoi.moveDisc(1,2);//19
towersOfHanoi.moveDisc(3,1);//20
towersOfHanoi.moveDisc(2,3); //21
towersOfHanoi.moveDisc(2,1); //22
towersOfHanoi.moveDisc(3,1); //23
towersOfHanoi.moveDisc(3,2);//24
towersOfHanoi.moveDisc(1,2); //25
towersOfHanoi.moveDisc(1,3); //26
towersOfHanoi.moveDisc(2,3);//27
towersOfHanoi.moveDisc(1,2); //28
towersOfHanoi.moveDisc(3,1); //29
towersOfHanoi.moveDisc(3,2); //30
towersOfHanoi.moveDisc(1,2); //31
 

     









  
 

