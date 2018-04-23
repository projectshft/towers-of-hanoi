var validMove = true;
var announceWinner = false;
var winner = 'winner'

var time = 500;
var startGame = function(){
  for(a=0; a<5; a++){
    setTimeout(function(){
      if(!accessBoard.endGame){
        play(prompt('Make your move player X\n' + accessBoard.boardRow1[0]+'  |  '+accessBoard.boardRow1[1]+'  |  '+accessBoard.boardRow1[2]+'\n'+accessBoard.boardRow2[0]+'  |  '+accessBoard.boardRow2[1]+'  |  '+accessBoard.boardRow2[2] +'\n'+ accessBoard.boardRow3[0]+'  |  '+accessBoard.boardRow3[1]+'  |  '+accessBoard.boardRow3[2]), 'X');
      }
    },time);

    setTimeout(function(){
      if (validMove == false){
        alert('Not a valid move');
        play(prompt('Player X: Try a different move\n' + accessBoard.boardRow1[0]+'  |  '+accessBoard.boardRow1[1]+'  |  '+accessBoard.boardRow1[2]+'\n'+accessBoard.boardRow2[0]+'  |  '+accessBoard.boardRow2[1]+'  |  '+accessBoard.boardRow2[2] +'\n'+ accessBoard.boardRow3[0]+'  |  '+accessBoard.boardRow3[1]+'  |  '+accessBoard.boardRow3[2]), 'X');
        validMove = true;
      };
    },time);

    time+= 500;

    setTimeout(function(){
      if(!accessBoard.endGame){
        play(prompt('Make your move player O\n' + accessBoard.boardRow1[0]+'  |  '+accessBoard.boardRow1[1]+'  |  '+accessBoard.boardRow1[2]+'\n'+accessBoard.boardRow2[0]+'  |  '+accessBoard.boardRow2[1]+'  |  '+accessBoard.boardRow2[2] +'\n'+ accessBoard.boardRow3[0]+'  |  '+accessBoard.boardRow3[1]+'  |  '+accessBoard.boardRow3[2]), 'O');
      }
    },time);

    setTimeout(function(){
      if (validMove == false){
        alert('Not a valid move');
        play(prompt('Player O: Try a different move\n' + accessBoard.boardRow1[0]+'  |  '+accessBoard.boardRow1[1]+'  |  '+accessBoard.boardRow1[2]+'\n'+accessBoard.boardRow2[0]+'  |  '+accessBoard.boardRow2[1]+'  |  '+accessBoard.boardRow2[2] +'\n'+ accessBoard.boardRow3[0]+'  |  '+accessBoard.boardRow3[1]+'  |  '+accessBoard.boardRow3[2]), 'O');
        validMove = true;
      };
    },time);

    setTimeout(function(){
      if (announceWinner){
        alert("Player " + winner +" is the Winner!!");
        announceWinner = false;
      };
    },time);

    time+= 500;
  }
}
//startGame();
