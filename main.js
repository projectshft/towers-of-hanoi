/*========================================================
-still a few things to do, but thought I should go ahead and turn it in.

-I tried to set up programatically so that with an easy alteration of how values are initially passed into the array, and I tried to think about efficiency, but I was relying on instinct/logic and could be totally wrong about what moves more quickly.


=============================================================*/

var instructions = function(){
  alert('Thanks for playing Tic Tac Toe! X plays first.  To get started, click OK and then type play(yourChoice) to choose where X will go!')
};

var player = function(name, symbol){
  return {
  name : name,
  symbol : symbol};
}
  player1 = player(prompt('X player, what is your name?'),'X');
  player2 = player(prompt('O player, what is your name?'),'O');

//create two players and assign each to their character 'x' or

var boardDisplay = [[1, 2, 3], [4, 5, 6], [7, 8, 9,]];

//var boardDisplay = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10] , [11, 12, 13, 14, 15] , [16, 17, 18, 19, 20] , [21, 22, 23, 24, 25]];

var winCombos = [];//all possible combinations that win game

var gameSetup = function(){
  var lrDiagonal = []; //left right diagonal
  var rlDiagonal = []; //right left diagonal
  var col1Combo = []; //column 1 winCombo
  var col2Combo = []; //column 2 winCombo
  var col3Combo = []; //column 2 winCombo

  for(var i = 0; i < boardDisplay.length; i++){
    console.log(boardDisplay[i].join(" ")); //print the board
    winCombos.push(boardDisplay[i]); // add each sub-array 'row' to winning combo array
    col1Combo.push(boardDisplay[i][0]);
    col2Combo.push(boardDisplay[i][1]);
    col3Combo.push(boardDisplay[i][2]); //push column combos to their repsective arrays
    lrDiagonal.push(boardDisplay[i][i]); // calculate number needed from row for lr diagonal and push it into lrdiagonal array
    rlDiagonal.push((boardDisplay.length * (i + 1)) - i); // calculate number needed from row for rl diagonal and push it into rldiagonal array
  };
  winCombos.push(lrDiagonal, rlDiagonal, col1Combo, col2Combo, col3Combo);
};

instructions();
gameSetup();

var turn = 1; //keep track of whose turn it is
var playCount = 0; //??maybe for tracking a tie?

//create a function for play that takes the position the position the player wants to play

var play = function(playerChoice){
  //create a checkWinner function to see if someone has won
  var checkForWins = function(){
    var letterChecker = '';
    var letterCounter = 0;
    for(var outer = 0; outer < winCombos.length; outer++){
      for(var inner = 0; inner < winCombos[outer].length; inner++){
        if(typeof(winCombos[outer][inner]) !== 'number' && letterChecker == ''){ //if item is a letter and letter checker is empty,
          letterChecker= winCombos[outer][inner]; //add item to letter checker to be compared
          letterCounter++; //then add 1 to letter counter
        } else if (typeof(winCombos[outer][inner]) !== 'number' && letterChecker !== ''){ //if item is a letter and letter checker is not empty
          if((winCombos[outer][inner]) == letterChecker && letterCounter == 1) //if the value and letter checker are equal and if the letterCounter is ==1
          letterCounter++; //add one to letter checker
        } else if(typeof(winCombos[outer][inner]) !== 'number' && letterChecker !== ''){ //if item is a letter and letter checker is not empty
          if((winCombos[outer][inner]) == letterChecker && letterCounter == 2){//if the value and letter checker are equal and if the letterCounter is ==2
            alert(player.letterChecker + 'wins')
          };
        };
      };
    };
  },
//take turns and modify the board
  var row = Math.floor((playerChoice - 1) /boardDisplay[0].length); //row coordinate value ofplayerChoice
  var column = ((playerChoice - 1) %boardDisplay[0].length);
  //column coordinate value of playerChoice
  var setChoice = function(){
    if(turn % 2 !== 0){
        boardDisplay[row].splice(column, 1, player1.symbol);
      turn++; //for each play, switch player!!!!!!!!!!!
    } else {
      boardDisplay[row].splice(column, 1, player2.symbol);
      turn++;//for each play, switch player!!!!!!!!!!!
    };
    for(var p = 0; p < boardDisplay.length; p++){
      console.log(boardDisplay[p].join(" ")); //printthe board
    };
  };
  setChoice();
  checkForWins();
};
