
// Todo: ask player one for name
// Todo:assign player 1, “x'
// Todo: write down player 1 with name given and character “x” 
// Todo: ask player 2 their name
// Todo:assign player 2, “o”
// Todo: write down player 2 with name given and character “o"
// Todo: make a board with 3 rows and 3 columns 
// Todo: label the board with numbers 1-9, from top to bottom and left to right
// Todo: print board
// * player one chooses a number first and replaces that number with “x”
// * check if player 1 has won, if not, player 2 chooses a number and replaces it with “o”
// * check if player 2 has won, if not, player 1 chooses again. 
// *this continues until either someone has won, or no numbers are available to choose. 
// * When someone wins, announce player “” has won and reset the board
// * If no one wins, announce a tie and reset the board.  
// Todo: make sure neither player can go two times in a row. 
// Todo: make sure to win, a player must have three characters in a row (vertically, horizontally, diagonally)

let player1 = {
  firstName: "FirstPlayerName",
  character: "x"
};
    

let player2 = {
  firstName: "secondPlayerName",
  character: "o"
};


player1.firstName= prompt("Player One Name?");
player2.firstName= prompt("Player Two Name?");


console.log(player1.firstName);
console.log(player2.firstName);

var myArray1 = new Array(3);

for (i = 0; i < 3; i++) { 
  myArray1[i] = new Array(3);
}

var start = 1;

for (var i = 0; i < 3; i++) { 
  for (var j = 0; j < 3; j++) {
    myArray1[i][j] = start; 
    start = start + 1;
  }
}

for (var i = 0; i < 3; i++) { 
  for (var j = 0; j < 3; j++) { 
    document.write(myArray1[i][j] + "&emsp;");
  }
    document.write("<br/>")  
 }

var winningCombo = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7]
];

for (var i = 0; i < 3; i++) { 
  for (var j = 0; j < 3; j++) {
    winningCombo[i][j] = winner;
  }
}


let play = { 
 
}
player1.play= prompt("Player 1, Choose a number 1-9");



player1.play= prompt("Player 1, Choose a number 1-9");
player2.play= prompt("Player 2, Choose a number 1-9");



