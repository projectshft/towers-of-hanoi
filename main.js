
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
for (var i = 0; i < 3; i++) { 
  for (var j = 0; j < 3; j++) {
    myArray1[i][j] = start; 
    start = start + 1;
  }
}
// for (int i = 0; i < 3; i++) {
//    for (int j = 0; j < 3; j++) {
//        console.log(myArray1);// put code that you want to run on all items in array here
//        // use myArray[i][j] to reference the current item
//    }
// }

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


let play = { 
  

}

player1.play= prompt("Player 1, Choose a number 1-9");
player2.play= prompt("Player 2, Choose a number 1-9");

