var validMove = true;
var announceWinner = false;
var winner = 'winner'
var reverseMove = [accessBoard.boardRow1, accessBoard.boardRow2, accessBoard.boardRow3];
var entireBoard = ['X', accessBoard.boardRow1[0], accessBoard.boardRow1[1], accessBoard.boardRow1[2], accessBoard.boardRow2[0], accessBoard.boardRow2[1], accessBoard.boardRow2[2], accessBoard.boardRow3[0], accessBoard.boardRow3[1], accessBoard.boardRow3[2]]
var num = 0;
var oContinues = true;

function findFirstNumber(element) {
  return element > num;
}

var count = 0;
var lastMove = 0;
var startGame = function(){
  for(a=0; a<5; a++){

    if(!accessBoard.endGame){ //If the game has not ended, then the next set of turns initiates
      //promots player to make a move in the alert window
      play(prompt('Make your move player X\n' + accessBoard.boardRow1[0]+'  |  '+accessBoard.boardRow1[1]+'  |  '+accessBoard.boardRow1[2]+'\n'+accessBoard.boardRow2[0]+'  |  '+accessBoard.boardRow2[1]+'  |  '+accessBoard.boardRow2[2] +'\n'+ accessBoard.boardRow3[0]+'  |  '+accessBoard.boardRow3[1]+'  |  '+accessBoard.boardRow3[2]), 'X');

      if (validMove == false){ //If the player tries a valid move, prompts player to try again until play gives valid move
        while(!validMove){
          alert('Not a valid move');
          play(prompt('Player X: Try a different move\n' + accessBoard.boardRow1[0]+'  |  '+accessBoard.boardRow1[1]+'  |  '+accessBoard.boardRow1[2]+'\n'+accessBoard.boardRow2[0]+'  |  '+accessBoard.boardRow2[1]+'  |  '+accessBoard.boardRow2[2] +'\n'+ accessBoard.boardRow3[0]+'  |  '+accessBoard.boardRow3[1]+'  |  '+accessBoard.boardRow3[2]), 'X');
        }
      }
    };
    if(!accessBoard.endGame){ //Now the computers turn initiates.
      if (count==0){ //The computers first move checks for 2 different conditions and makes a move
        if (entireBoard[5] == 'X'){
          play(7, 'O');
        }
        else{
          play(5, 'O');
        }
      }

      if (count==1){
        if (entireBoard[5] == 'X'){
          if (entireBoard[3]=='X'){
            play(9,'O');
          }
          else{
            play(10-lastMove,'O');
          }
        }
        else if(entireBoard[1]=='X'&&entireBoard[8]=='X'){
          play(7,'O')
        }
        else if(entireBoard[1]=='X'&&entireBoard[6]=='X'){
          play(3,'O')
        }
        else if(entireBoard[3]=='X'&&entireBoard[8]=='X'){
          play(9,'O')
        }
        else if(entireBoard[3]=='X'&&entireBoard[4]=='X'){
          play(1,'O')
        }
        else if(entireBoard[6]=='X'&&entireBoard[7]=='X'){
          play(9,'O')
        }
        else if(entireBoard[7]=='X'&&entireBoard[2]=='X'){
          play(1,'O')
        }
        else if(entireBoard[9]=='X'&&entireBoard[4]=='X'){
          play(7,'O')
        }
        else if(entireBoard[9]=='X'&&entireBoard[2]=='X'){
          play(3,'O')
        }
        else if(entireBoard[2]=='X'&&entireBoard[4]=='X'){
          play(1,'O');
        }
        else if(entireBoard[2]=='X'&&entireBoard[6]=='X'){
          play(3,'O');
        }
        else if(entireBoard[8]=='X'&&entireBoard[4]=='X'){
          play(7,'O');
        }
        else if(entireBoard[8]=='X'&&entireBoard[6]=='X'){
          play(9,'O');
        }
        else if(entireBoard[2]=='X'&&entireBoard[8]=='X'){
          play(9,'O');
        }
        else if(entireBoard[4]=='X'&&entireBoard[6]=='X'){
          play(9,'O');
        }
        else if(entireBoard[10-lastMove] == 'X'){
          play(2,'O');
        }
      }

      if (count >= 2 && entireBoard[5] == 'X'){
        if (lastMove == 3 && entireBoard[9] == 'X'){
          play(6,'O');
        }
        else{
          play(10-lastMove, 'O');
          if (validMove==false){
            num = 0;
            play(entireBoard.findIndex(findFirstNumber), 'O');
            validMove=true;
          }
        }
      }
      else if (count == 2){
        lastMove=0;
        if (oContinues){
          OWinScenario();
        }
        if (oContinues){
          XWinScenario();
        }


      }

      if(!accessBoard.endGame && count==2 && entireBoard[5]!='X' && oContinues){

        if(entireBoard[7]=='X'&& entireBoard[3]=='X'){
          play(9,'O')
        }
        else if (entireBoard[9]=='X' && entireBoard[1]=='X'){
          play(7,'O')
        }

        else{
          num = 0;
          play(entireBoard.findIndex(findFirstNumber), 'O');
        }
      }


      if(count>=3 && entireBoard[5]!='X'){
        if(entireBoard[7]=='X'&& entireBoard[3]=='X'){
          play(4,'O')
        }
        else if (entireBoard[9]=='X' && entireBoard[1]=='X'){
          play(6,'O')
        }
        else{
          if (oContinues){
            OWinScenario();
          }
          if (oContinues){
            XWinScenario();
          }
          if (oContinues){
            num = 0;
            play(entireBoard.findIndex(findFirstNumber), 'O');
          }

        }
      }

    }


      if (announceWinner){
        alert("Player " + winner +' is the winner!!!\n' + accessBoard.boardRow1[0]+'  |  '+accessBoard.boardRow1[1]+'  |  '+accessBoard.boardRow1[2]+'\n'+accessBoard.boardRow2[0]+'  |  '+accessBoard.boardRow2[1]+'  |  '+accessBoard.boardRow2[2] +'\n'+ accessBoard.boardRow3[0]+'  |  '+accessBoard.boardRow3[1]+'  |  '+accessBoard.boardRow3[2]);
        announceWinner = false;
      };
      count++;
      oContinues=true;

  }
  if(!announceWinner&&!accessBoard.endGame){
    alert('It is a Tie!\n' + accessBoard.boardRow1[0]+'  |  '+accessBoard.boardRow1[1]+'  |  '+accessBoard.boardRow1[2]+'\n'+accessBoard.boardRow2[0]+'  |  '+accessBoard.boardRow2[1]+'  |  '+accessBoard.boardRow2[2] +'\n'+ accessBoard.boardRow3[0]+'  |  '+accessBoard.boardRow3[1]+'  |  '+accessBoard.boardRow3[2])
  }
}

var OWinScenario = function(){
  lastMove=0;
  for (var i=1; lastMove<9; i++){
    play(i, 'O');

    if(!announceWinner && validMove==true){
      console.log(lastMove);
      reverseMove[Math.floor((lastMove-1)/3)][lastMove-((Math.floor((lastMove-1)/3))*3+1)] = lastMove;
      console.log('first stop')
    }
    else if (announceWinner && validMove ==true) {
      lastMove = 10; //effectively ends the loop.
      oContinues = false
    }
    console.log('second stop')
  }
}

var XWinScenario = function(){
  lastMove=0;
  for (var i=1; lastMove<9; i++){
    play(i, 'X');

    if(!announceWinner && validMove==true){
      console.log(lastMove);
      reverseMove[Math.floor((lastMove-1)/3)][lastMove-((Math.floor((lastMove-1)/3))*3+1)] = lastMove;
      console.log('first stop')
    }
    else if (announceWinner && validMove ==true) {
      reverseMove[Math.floor((lastMove-1)/3)][lastMove-((Math.floor((lastMove-1)/3))*3+1)] = lastMove;
      play(i, 'O');
      lastMove = 10; //effectively ends the loop.
      oContinues = false;
      announceWinner = false;
      accessBoard.endGame = false;
    }
    console.log('second stop')
  }
}

startGame();
