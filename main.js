var Game = {
  board: [[5,4,3,2,1], [], []],

  totalMoves : 0,
  //move disc function
  moveDisc: function(startPeg, endPeg){
      var startPegIndex = startPeg - 1;
      var endPegIndex = endPeg -1;

      var startPegDisc = this.board[startPegIndex][this.board[startPegIndex].length -1];
      var endPegDisc = this.board[endPegIndex][this.board[endPegIndex].length -1];

      // illegal move checker
      if(endPegDisc === undefined || endPegDisc > startPegDisc){
          var startPegMove = this.board[startPegIndex].pop()
          var endPegMove = this.board[endPegIndex].push(startPegMove)
          this.totalMoves += 1;
          this.printBoard()
          return this.checkWinner();
      } else if(endPegDisc < startPegDisc){
          console.log('Please move a smaller dics onto a larger disc.')
          return this.printBoard();
      };

  },

  //printBoard
  printBoard: function(){
      var printBoard = this.board.map((value, index, array) => {
          return '---' + array[index];
        });
       return console.log(printBoard);
  },

  //check winner using reduce
  checkWinner: function(){
      var reduce1 = this.board[1].reduce(function(sum, currNum){
          return sum + currNum
      }, 0);
      var reduce2 = this.board[2].reduce(function(sum, currNum){
          return sum + currNum
      }, 0);

      if(reduce1 === 15 || reduce2 === 15){
         console.log('You won in ' + this.totalMoves + ' moves.')
         return this.resetBoard()
      };


  },

  resetBoard: function(){
      var newGame = [[3, 2, 1], [], []]
      this.board = newGame
      console.log('New Game? ')
      return this.printBoard()

  },

  moveOption: function(disc){
      var optionArray = [];
      //map out the last index of array or push 0 for undefined
      var peekBoard = this.board.map((value, index, array) => {
          if(typeof array[index][array[index].length -1] === 'number'){
              return optionArray.push(array[index][array[index].length -1])
          } else if(typeof array[index][array[index].length -1] === 'undefined'){
              return optionArray.push(0)
          }
        });
        //disc being passed in and assessing index and value
        var discIndex = disc - 1;
        var discValue = this.board[discIndex][this.board[discIndex].length -1];
        //Using filter to assess currently what disc on another peg has greater value or is empthy
        var options = optionArray.filter(function(topDisc){
            return topDisc > discValue || topDisc === 0;
        });
        //Using map to find the indexs of the top disc option pegs
       var index = options.map(function(disc){
          var discNum = optionArray.indexOf(disc) +1;
          return discNum;
      });
      return console.log('You can move to peg ' + index)
  }

};
Game.moveDisc(1,2)
Game.moveOption(1)
