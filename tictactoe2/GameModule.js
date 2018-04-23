var GameModule = function() {

  const winnerCombination = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  var possibleMove = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var currentPlayer;
  var moveCount = 1;
  var playerCount;
  var end = false;
  var player1;
  var player2;

//this is the initializer. prompts for name
  var init = function(){
    do {
       playerCount = prompt('How many players?', "1");
    }while (playerCount != 1 && playerCount != 2);

    player1 = PlayerModule();
    player2 = PlayerModule();

    player1.set('name', prompt('What\'s your name player1?'));
    player2.set('name', prompt('What\'s your name player2?'));
    player1.set('symbol', 'x');
    player2.set('symbol', 'o');
  };

//checks to see if game needs to restart. While end === false keep going, true === STOP
var start = function(){
  while(end === false) {
    currentPlayerChecker();
    choiceAlgo(playerInput());
    endGame();
  }
};

// check who is the current player. Algo where the taking turns depends on odd or even
var currentPlayerChecker = function() {
  if(moveCount % 2 == 1) {
    currentPlayer = player1;
  }else {
    currentPlayer = player2;
  }
};

// takes in player input for movement. ParseInt make into integer
var playerInput = function() {
  var playerChoice;
  do {
    //compares the moves with the player choice
    playerChoice = parseInt(prompt('What\'s your move? ' + currentPlayer.get('name')));
  }while(!possibleMove.includes(playerChoice));

    return playerChoice;

};

// determines which move taken
var choiceAlgo = function(choice){
  var tempArray = [];
  possibleMove.forEach(function(x){
    if(x != choice){
      tempArray.push(x);
    }
  });
  possibleMove = tempArray;

  currentPlayer.set('movePieces', choice);

};
//  loops through winningCombination array to determine winner
var checkWinner = function() {
  for (var i = 0; i < winnerCombination.length; i++) {
    if(currentPlayer.get('movePieces').includes(winnerCombination[i][0])) {
      if(currentPlayer.get('movePieces').includes(winnerCombination[i][1])) {
        if(currentPlayer.get('movePieces').includes(winnerCombination[i][2])) {

          return true;

        }
      }
    }
  }
  return false;
};

//checks for winner. if moves exceed 9 it will be TIE. keeps looping for winner. if loop.
var endGame = function(){
  if(checkWinner()) {
    alert('You win ' + currentPlayer.get('name'));
    end = true;
  } else if(moveCount === 9) {
    alert('TIE');
    end = true;
  }else{
    console.log(currentPlayer.get('name')+' '+currentPlayer.get('movePieces'));
    console.log('Game continues');
    moveCount++;
  }
};




  return{
    init: init,
    start: start
  };
};
