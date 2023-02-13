 const board = {
  pegs : [[5,4,3,2,1], [], []], 
  plays: 0,
  peg : '---', 
  pegsLength : function() {
    return this.pegs.length //3
  }, //does not work without the function 

  // when this code is finish, maybe seperate the discs and disc postion
  discs : function(pegNum) { 
    //no var? 
    discPosition = this.pegs[pegNum].length - 1; 
    lastNum = this.pegs[pegNum][discPosition]; 
    return lastNum
  }, 

  pushDics : function(popOut, pushIn){  
    debugger;    
    pop = this.pegs[popOut].length - 1; 
    lastNumStartArray = this.pegs[popOut][pop]; 
    endArray = this.pegs[pushIn]; 
    startArray = this.pegs[popOut]; 

    endArray.push(this.discs(popOut)); 
    startArray.pop();  

  }, 

  moveDisc : function (startPeg, endPeg) {
    startArrayPos = startPeg - 1; 
    endArrayPos = endPeg - 1; 

    if (startPeg >= board.pegsLength() && endPeg >= board.pegsLength()) {
      alert( 'This Peg does not exist'); 
      return false
    } 

    if (this.discs(startArrayPos) === undefined && this.discs(endArrayPos) === undefined ) {
      alert('There is no disc inside either of the pegs what are you doing??')
      return false 
    }

    if (this.discs(startArrayPos) <= this.discs(endArrayPos) || this.discs(endArrayPos) === undefined ) {
        this.pushDics(startArrayPos, endArrayPos); 
        this.plays += 1 ; 
        this.checkWinner(); 
        alert('This peg exist'); 
        // this.printBoard; 
        return true
      }
  },
  
  // printBoard : this.pegs.map(function(print) {
  //   return board.this.peg; 

  // }),

  checkWinner : function(){
    if (this.pegs[0].length === 0 ) {
      alert('You won!'); 
    }

  },

  printBoard : this.pegs.map(function (print) {
    return this.print

  })

}; 




// // var change = function (pegs, dics) {
// //     var peg = ['---'];
     
// //     for (let i = 0; i < pegs; i++) {
// //         emptyBoard.push(peg); 
// //     }
// //     for (let j = 0; j < dics; j++) {
// //         emptyBoard[0].push(dics - j); 
// //     }
// // };
