/*Move a set of discs of different sizes from one peg to another while only
allowing the player to take the topmost disc off the peg and not putting a
larger disc on top of a smaller one.*/

//board object
const GameBoard = function () {
  this.pegs = [[5, 4, 3, 2, 1],[],[]];
};

//Prints when opening the program
console.log("Type 'start()' and press enter to begin the Towers of Hanoi game. \nType 'rules()' and press enter for rules of the game.");


//Prints rules of the game
const rules = function () {
  console.log('The goal of Towers of Hanoi is to move a set of discs of different sizes from one peg to another while only allowing the player to take the topmost disc off the peg and not putting a larger disc on top of a smaller one.');
}

//starts the game by creating new instance of GameBoard, prints instructions, and prints state of board.
const start = function () {
  board = new GameBoard ();

  console.log("Type 'board.moveDisc(x,y)' and input 1, 2, or 3 for x and y then press enter to move the peg. \nx = donor peg \ny = donee peg.");

  board.printState();
};

//Checking if move is valid. Print out result. Move disc. 
GameBoard.prototype.moveDisc = function (pegDonor,pegDonee) {
  //variables pointing to arrays choosen
  const pegDonorArray = this.pegs[pegDonor-1];
  const pegDoneeArray = this.pegs[pegDonee-1];
  
  //variables pointing to the last value of the arrays/pegs choosen
  const pegDonorLastValue = pegDonorArray[pegDonorArray.length-1];
  const pegDoneeLastValue = pegDoneeArray[pegDoneeArray.length-1];
  
  //checking if move is valid and moving value if true
  if(pegDoneeLastValue === undefined || pegDonorLastValue < pegDoneeLastValue){
    //moves donor element to donee array
    const OriginLastValue = pegDonorArray.pop();
    pegDoneeArray.push(OriginLastValue);
    //print out sucess
    console.log('That move was successful, board is now:')
  }
  else if(pegDonorLastValue > pegDoneeLastValue){
    console.log('You cannot move a larger disc on last element of a smaller one, board is still:');
  }
  else{
    console.log('Input not valid.');
  };

  this.printState();
  this.checkWinner(pegDonee);

};

//Print to console state of board
GameBoard.prototype.printState = function () {
  const arrayOfStrings = this.pegs.map(function(pegArray){
    newArray = pegArray.join(' ');
    return newArray;
  }); 

  arrayOfStrings.forEach(function(peg,index){
    console.log(`peg ${index+1}--- ${peg}`);
  });

  console.log('-------------------------------------------------------------------------------------------');
};

GameBoard.prototype.checkWinner = function (donee) {
  const pegTotal = this.pegs[donee-1].reduce((sum, peg) => sum += peg);

  if(!(donee === 1) && pegTotal === 15) {
   console.log('******Congratulations!!! You won!!!******');
   console.log("***********Game will now reset***********");
   console.log('===========================================================================================');
   start();
  };


};
