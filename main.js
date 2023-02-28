let numPegs  = prompt('Enter the number of pegs: '); 
let numDiscs  = prompt('Enter the number of discs: '); 

const board = {
  pegs : [],
  plays: 0,
  peg : '---', 
 
    pegsLength() {
      return this.pegs.length 
    },  

    lastNumOf(pegNum) { 
      discPosition = this.pegs[pegNum].length - 1; 
      lastNum = this.pegs[pegNum][discPosition]; 
      return lastNum
    }, 

    pushDics(popOut, pushIn){  
      endArray = this.pegs[pushIn]; 
      startArray = this.pegs[popOut]; 
      endArray.push(this.lastNumOf(popOut)); 
      startArray.pop();  
    }, 

    moveDisc(startPeg, endPeg) {
      startArrayPos = startPeg - 1; 
      endArrayPos = endPeg - 1; 

      if (startPeg > board.pegsLength() || endPeg > board.pegsLength() || this.lastNumOf(startArrayPos) === undefined) {
        alert('illegal move'); 
        return false
      } 

      if (this.lastNumOf(startArrayPos) <= this.lastNumOf(endArrayPos) || this.lastNumOf(endArrayPos) === undefined ) {
          this.pushDics(startArrayPos, endArrayPos); 
          this.plays += 1 ;  
          console.log('That move was successful, board is now:')
          this.printBoard(this.pegs, this.peg); 
          this.checkWinner(this.pegs); 
          return true
        } else {
          alert('You cannot put the bigger disc on top of the smaller one! Try again!')
          return false; 
        }
    
    },
  
    printBoard() {
        debugger; 
        return console.log(this.pegs.map((allPegs) => { 
          let resultBoard = allPegs.map((allDisc) => `${allDisc}`).join(' ');
          return `${this.peg} ${resultBoard}`;
        }).join('\n')
        )

    },

    checkWinner(pegs){ 
        debugger;
        for (let i = 0; i < this.pegs.length; i++) { 
          if (i !== 0 && this.pegs[i].length === parseInt(numDiscs)) {
            console.log('You won! It only took ' + this.plays +' attempts!');
            this.plays = 0; 
            this.pegs = [];  
            return true
          }
        } 
        return false
    },
        
    change : function (pegsNum, dicsNum) {
          for (let i = 0; i < pegsNum; i++) {
              this.pegs.push([]); 
          }
          for (let j = 0; j < dicsNum; j++) {
              this.pegs[0].push(dicsNum - j); 
          }

          this.printBoard();
    }
}; 

board.change(numPegs, numDiscs); 
  
