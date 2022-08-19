// Initial game state
var towers = {
  board: [[5,4,3,2,1],
  [],
  []],
  
  // Takes in moves and checks validity
  move: function (x,y) {   
    // Returns last number in array based on users first input
    var disc = this.board[x][this.board[x].length -1];
    // Returns last number in array or undefined based on users second input
    var testDisc = this.board[y][this.board[y].length -1];
    
    if(testDisc && disc < testDisc || this.board[y].length === 0) {
      // Removes last number from array and pushes onto necessary array annd prints to console
      this.board[y].push(disc);
      this.board[x].pop();
      this.printTowers();
      this.checkWinner();
    // Checks move validity
    }else {
      console.log('Invalid move!');
    };
    },
    // Maps array to console
    printTowers: function() {
      this.board.map (tower => {
       console.log('---' + tower);
      });
      
    },
    // Determines game state
    checkWinner: function() {
      if (this.board[1].length === 5 || this.board[2].length === 5){
        console.log('You Win!!!');
        console.log('Would you like to play again?');
        this.reset();
      }
    },
    // Resets Game
    reset: function() {
     this.board = [[5,4,3,2,1],[],[]];
     this.printTowers();
    }
};


    towers.move(0,1);
    towers.move(0,2);
    towers.move(1,2);
    towers.move(0,1);
    towers.move(2,0);
    towers.move(2,1);
    towers.move(0,1);
    towers.move(0,2);
    towers.move(1,2);
    towers.move(1,0);
    towers.move(2,0);
    towers.move(1,2);
    towers.move(0,1);
    towers.move(0,2);
    towers.move(1,2);
    towers.move(0,1);
    towers.move(2,1);
    towers.move(2,0);
    towers.move(1,0);
    towers.move(0,2);
    towers.move(0,1);
    towers.move(2,1);
    towers.move(2,0);
    towers.move(1,2);
    towers.move(1,0);
    towers.move(2,0);
    towers.move(2,1);
    towers.move(0,1);
    towers.move(0,2);
    towers.move(1,2);
    towers.move(0,1);
    towers.move(2,0);
    towers.move(2,1);
    towers.move(0,1);
    towers.move(0,1);
    towers.move(0,1);
    
    

 
    
    
  