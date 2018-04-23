var accessBoard = {
  //This is the mutable board that the game is played on
  boardRow1 : [1,2,3],
  boardRow2 : [4,5,6],
  boardRow3 : [7,8,9],
  makeMove : function(targetSpace, XorO){
    if (targetSpace == 'end game'){
      accessBoard.endGame = true;
      validMove=true;
    }
    /* first this targets the row
    then I check to see if the space has already been played
    then I find the column
    then I overwrite the space with player's move */
    else if (targetSpace>0 && targetSpace<=3){
      let index = 0;
      accessBoard.boardRow1.forEach(function (x){
        if(typeof accessBoard.boardRow1[index] != 'number' && index+1 == targetSpace){//checks if move has been played
          validMove = false; //if validMove is false, then
        }
        if (x == targetSpace ){
          accessBoard.boardRow1[index] = XorO;
          validMove=true;
        }
        index++;
      });

    }
    else if(targetSpace>3 && targetSpace<=6){
      let index = 0;
      accessBoard.boardRow2.forEach(function (x){
        if(typeof accessBoard.boardRow2[index] != 'number' && index+4 == targetSpace){//checks if move has been played
          validMove = false;
        }
        if (x == targetSpace ){
          accessBoard.boardRow2[index] = XorO;
          validMove=true;
        }
        index++;
      });

    }
    else if(targetSpace>6 && targetSpace<=9){
      let index = 0;
      accessBoard.boardRow3.forEach(function (x){
        if(typeof accessBoard.boardRow3[index] != 'number' && index+7 == targetSpace){//checks if move has been played
          validMove = false;
        }
        if (x == targetSpace ){
          accessBoard.boardRow3[index] = XorO;
          validMove=true;
        }
        index++;
      });

    }
    else { //If move does not fall in the parameters of 1-9
      validMove = false;
    }

    lastMove = targetSpace; //stores the last move as a variable for the computer to use in calculations
    entireBoard = ['X', accessBoard.boardRow1[0], accessBoard.boardRow1[1], accessBoard.boardRow1[2], accessBoard.boardRow2[0], accessBoard.boardRow2[1], accessBoard.boardRow2[2], accessBoard.boardRow3[0], accessBoard.boardRow3[1], accessBoard.boardRow3[2]]
    return accessBoard.checkWinner(XorO);
  },

  checkWinner: function(XorO){
    function isWinner(x) {
      return x == XorO;
    }
    //Checks horizontals
    if(accessBoard.boardRow1.every(isWinner)||accessBoard.boardRow2.every(isWinner)||accessBoard.boardRow3.every(isWinner)){
      accessBoard.endGame = true;
      announceWinner = true;
      winner = XorO
    }
    //Checks verticals
    for(let i=0; i<3; i++){
      if(accessBoard.boardRow1[i] == accessBoard.boardRow2[i] && accessBoard.boardRow1[i] == accessBoard.boardRow3[i]){
        accessBoard.endGame = true;
        announceWinner = true;
        winner = XorO
      }
    }
    //Checks backslash diagonal
    if(accessBoard.boardRow1[0] == accessBoard.boardRow2[1] && accessBoard.boardRow1[0] == accessBoard.boardRow3[2]){
      accessBoard.endGame = true;
      announceWinner = true;
      winner = XorO;
    }
    //Checks forwardslash diagonal
    if(accessBoard.boardRow1[2] == accessBoard.boardRow2[1] && accessBoard.boardRow1[2] == accessBoard.boardRow3[0]){
      accessBoard.endGame = true;
      announceWinner = true;
      winner = XorO;
    }
  },

  endGame : false
};

var play = accessBoard.makeMove;
