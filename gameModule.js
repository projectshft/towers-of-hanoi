var GameModule = function(){
  const winScenario = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  var gameBoard = [1,2,3,4,5,6,7,8,9];
  var end = false;
  var playerCount;
  var player1;
  var player2;
  var moveCount = 1;
  var currentPlayer;

// Function 1: Prompt for number of Player(s) and name(s).
//              Then creating player objects or pc object.
  var gameInit = function() {

    //Do While loop, parsing player count input to int, repeat if not 1 or 2
    do {
      playerCount = parseInt(prompt("Type 1 to play against Agent Smith, 2 for PvP", "1"));
    } while (playerCount != 1 && playerCount != 2 );


    //Setting player1 name and symbol
    player1 = PlayerModule();
    player2 = PlayerModule();
    player1.set('name', prompt("Player 1,Please enter your name.", "Player 1"));

    //If player count == 2, assign player2 to a new playerModule and set Name;
    //else assign player2 to AI (aka Agent Smith);
    if(playerCount == 2){
      player2.set('name', prompt("Player 2,Please enter your name.", "Player 2"));
    } else {
      //if player count == 1, player2 will be assigned to Autotic
      player2.set('name', 'Agent Smith');
    }

    //Setting players symbol;
    player1.set('symbol', 'X');
    player2.set('symbol', 'O');
  };


// Function 2: Game Engine. Will be changed for jQuery later on.
  var gameLogic = function() {
    var choice;

    //can be changed to 'if' or 'while' statement for synchronous or asynchronous
    while(end === false && gameBoard.length !== 0){
      currentPlayerDecider();

      if(playerCount == 1 && currentPlayer == player2){
        choice = currentPlayer.auto(player1.get('moved'), gameBoard);
      } else {
        choice = userInput();
      }

      //Call turnTraffic Function
      turnTraffic(currentPlayer, choice);

      //Call endTurn function if there's a result;
      endTurn(currentPlayer);
    }

    alert("Thank you for playing.");
  };

// Function 3: Decide Who's turn
  var currentPlayerDecider = function() {
    //Using moveCount (odd or even) to decide who's turn.
    if(moveCount % 2 === 1){
      currentPlayer = player1;
    } else {
      currentPlayer = player2;
    }
  };


// Function 4: Prompts player for their move choices.
  var userInput = function() {
    do{
      input = parseInt(prompt("What's the move? " + currentPlayer.get('name') + ", 1-9 whole number only."));

      if (input == "999") {
        alert('Lame');
        return true;
      }

    }while(!gameBoard.includes(input));
    return input;
  };


// Function 5: Function that takes in a number, removing it from
//              gameboard array and pushing to player's attributes['moved']
  var turnTraffic = function(currentPlayer, choice){
    //filter out number to temp array to reassign back to gameBoard.
    //could use delete, but gameboard.length wouldn't change to determine tie.
    let temp = [];
    gameBoard.forEach(function(x){
        if(x != choice){
          temp.push(x);
        }
    });
    gameBoard = temp;


    //pushing num to player obj.
    currentPlayer.set('moved', choice);

    // logging stats, so it can be playable through console.
    console.log(currentPlayer.get('name')+' '+ currentPlayer.get('moved'));
    console.log(currentPlayer.get('symbol'));
  };


// Function 6: Return true if player 'moved' array includes winScenario.
  var checkWinner = function(array) {
    for(var i = 0; i < 8; i++){
      if(array.includes(winScenario[i][0])){
        if(array.includes(winScenario[i][1])){
          if(array.includes(winScenario[i][2])){
            return true;
          }
        }
      }
    }
    return false;
  };


// Function 7: End turn, function decides if player wins,ties, or keep going.
  var endTurn = function(currentPlayer) {
    if(checkWinner(currentPlayer.get('moved'))) {
      alert(currentPlayer.get('name') + " is the winner!");
      end = true;
    } else if (moveCount == 9){
      alert("Tie!");
      end = true;
    } else {
      moveCount++;
      return console.log("Game Continues.");
    }
  };


  return {
    init : gameInit,
    start : gameLogic
  };
};
