const Game = {
//creates custom board
  board:[],
//stores all the player's moves
  numberOfMoves:0,
//stores # of numDisks on the board
  numberOfPegs:0,
//stores number of pegs on the board
  numberOfDisks:0,
//player inserts number of pegs and disks desired and board is set up
  setBoard:function (numPegs, numDisks){
    //adds peg arrays to board
    if (numPegs < 3 || numPegs > 10 || numDisks < 3|| numDisks>10){
      console.log('Number of pegs and disks must be between 3 - 10.')
    }else{
    for (let i = 0; i < numPegs; i++){
      let peg = []
      Game.board.push(peg);
      Game.numberOfPegs++
    }
    //adds correct number of disks to each peg
    for (let j = numDisks; j > 0; j--){
      Game.board[0].push(j);
      Game.numberOfDisks++
    }
    Game.printGame()
  }
},
//formats game and prints it on console
  printGame:function(){
    //checks if game has been set
    if (Game.board.length === 0){
      console.log("You must set the board before you can print the board.")
    }else{
      //adds the pegs and removes commas and brackets
    const poleDisplay = Game.board.map(function(array, index){
      return 'Peg ' + [index+1] + " ---" + array.join('  ')
    })
    const final = poleDisplay.forEach(function(arr){
      console.log(arr)
    })}
  },
//moves disks from peg to peg
  toMove:function(oldPeg, newPeg) {
    //condition to make sure board is set
    if (Game.board.length === 0){
      console.log("You must set the board before you can move a disk.")
    //condition to ensure valid entery for current peg
  } else if(oldPeg > Game.numberOfPegs || oldPeg <= 0 || oldPeg === undefined || isNaN(oldPeg) === true){
      console.log('Please enter a valid peg number')
    //condition to ensure valid entery the disk is moving to
  } else if (newPeg> Game.numberOfPegs || newPeg <= 0 ||newPeg === undefined){
      console.log('Please enter a valid peg number')
    //sondition to check that player did not pick the same peg
  } else if (oldPeg === newPeg){
      console.log('Not a valid move. Please try again')
    //if correct info entered, disk will move to new peg
    }else{
      oldPeg = oldPeg -1
      newPeg = newPeg-1
      //checks that disk is moving to an empty peg or a peg with a larger disk on it
      if (Game.board[newPeg][Game.board[newPeg].length-1] ===undefined || Game.board[oldPeg][Game.board[oldPeg].length -1]<Game.board[newPeg][Game.board[newPeg].length-1]){
      //if valid move, disk moves, the # of moves increases by 1, the board is printed, and checkWinner function is called to see if player won the game
      var num = Game.board[oldPeg].pop()
        Game.board[newPeg].push(num)
        Game.numberOfMoves=Game.numberOfMoves+1
        console.log('You have made ' + Game.numberOfMoves + ' moves')
        console.log('That move was successful, board is now:')
        Game.printGame()
        Game.checkWinner()
      //if invalid move, message is consoled to inform player
      }else {
        console.log('You cannot move a larger disc on top of a smaller one, board is still:')
        Game.printGame()
      }
    }
  },
//shows player's inserts peg of disk they want to move and avaliable moves are printed to console
  seeOptions:function(currentPeg){
//checking if the board has not been set and if the player enter valid numbers
    if (Game.board.length === 0){
      console.log("You must set the board before you can move a disk.")
    }else if(currentPeg > Game.numberOfPegs || currentPeg <= 0 || currentPeg === undefined){
      console.log('Please enter a valid peg number')
    }else{
      currentPeg = currentPeg-1
    //condition to check if peg has disks on it
      if (Game.board[currentPeg].length === 0){
        console.log('That peg has 0 disks to move')
      }else{
    //if disks are avaliable, checks for empty pegs and pegs with larger disks
        const indexArray = []
        const options = Game.board.filter(function(pegs, index) {
        if (Game.board[currentPeg][Game.board[currentPeg].length-1]<pegs[pegs.length-1] || pegs[pegs.length-1]=== undefined){
            indexArray.push(index+1)
            return indexArray}})
          if(indexArray.length === 0){
          console.log('There are no options avaliable. Try a different peg.')
        }else{
        console.log('Your option(s) from Peg '+[currentPeg+1]+ ': '+  [indexArray])
      }
    }
  }
},
//called after each move to see if player has won
  checkWinner:function(){
      //condition to ensure player has moved the pegs from teh starting position
      if (Game.board[0].length === 0){
        //reduce function accumulates the # of arrays that are not empty. if sum is = to 1 they have all the pegs in one array
          const sum = Game.board.reduce(function (sum, num) {
            if (num.length > 0){
                return (sum + 1);
              }else{
                return sum;
              }}, 0);
        if (sum===1){
          //alerts player they won and resets game
          alert ('You Won! Play again.')
          console.log('You Won!')
          Game.reset()
        }
      }
    },
//called in the checkWinner function to reset board after game is won
  reset:function(){
      Game.board = []
      Game.numberOfPegs = 0
      Game.numberOfDisks = 0
      Game.numberOfMoves = 0
      console.log('Please set the board.')
    }
  }
