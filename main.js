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

let player1 = {
  firstName: "FirstPlayerName",
  character: "x"
};
    

let player2 = {
  firstName: "secondPlayerName",
  character: "o"
};

player1.firstName= prompt("What is your name?");
player2.firstName= prompt("What is your name?");


console.log(player1.firstName);
console.log(player1.character);

console.log(player2.firstName);
console.log(player2.character);
