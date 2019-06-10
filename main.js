/* Requirements: 
1. Make board using a 2D array
    -Nested array
2. Use MAP FUNCTION  to make board horizontal  
3. Player must submit moves 
    -board.moveDisc(1,2)
4. Must only move top piece and cannot have move a larger piece on top of a smaller piece.
5. Object responsible for maintaining state of board. 
6. FILTER to determine the tops that a disc can be moved to.
7. Check winner for win state. All pegs in order on another peg. REDUCE FUNCITON 
8. Anounce winner through console log and reset new game. 

/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
Example of input 

// Move the disc from peg 1 to peg 2
board.moveDisc(1,2);
That move was successful, board is now:
--- 5 4 3 2
--- 1
---

// Move disc from peg 1 to peg 3
board.moveDisc(1,3);
That move was successful, board is now:
--- 5 4 3
--- 1
--- 2

// Move disc from peg 1 to peg 2
board.moveDisc(1,2);
You cannot move a larger disc on top of a smaller one, board is still:
--- 5 4 3
--- 1
--- 2


/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
How am I going to do this? 

What inputs do I need? What outputs am I looking for? 

1. Start with the board.
-itirate new boards with the map array function. Each new board will move a number by passing through the start and end peg of a specified disk.

2. Prompt player for beginning peg and end peg. Use .pop and .push methods. 
Validate move and give error if not valid. Do not run if not valid and return error. If valid, then run the function.
Criteria 1) Must be a new peg. Criteria 2) Cannot be bigger on top. 
conditional statements telling me that move is valid because second value is smaller than first.
Can I check move in the same function? Or will I need a seperate checkMove function? 

If array is 3 - 2 - 1, prompt winner. 

 write code with single disk parent class and 
3 instances of that with different size values 

Calling Program.restart() will restart the program() 


Functions
1. board  
2. moveDisc
3. checkWin
4. resetGame 


var board = [
    peg 1 = ["3" ,"2" ,"1"],
    peg 2 = [" " ," " ," "],
    peg 3 = [" " ," ", " "]
];

var disk = function {
    c:3,
    b:2,
    a:1
}

function move(Disk, End Peg) {


}