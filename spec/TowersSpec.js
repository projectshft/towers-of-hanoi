describe('TowersOfHanoi', function(){

  describe('moveDisc', function() {
    beforeEach(function(){
      board = [
        [5, 4, 3, 2, 1],
        [],
        []
      ];
    });

    it('should be able to move a disc to another peg', function() {
      expect(board[0].length).toEqual(5);

      moveDisc(1, 3);

      expect(board[0].length).toEqual(4);
    });

    it('should only be able to move a disc if there are discs on the peg', function() {
      expect(board[1].length).toEqual(0);

      moveDisc(2, 3);

      expect(board[0].length).toEqual(5);
    });

    it('should only move a disc if it is smaller than the last disc on the destination peg', function() {
      expect(board[0].length).toEqual(5);
      
      moveDisc(1,2);
      moveDisc(1,2);
      
      expect(board[1].length).toEqual(1);
    });
  });


  describe('stringBoard', function(){
    beforeEach(function(){
      board = [
        [5, 4, 3, 2, 1],
        [],
        []
      ];
    });

    it('should return an array of 3 string elements', function() {
      
      expect(stringBoard(board)).toEqual(['--- 5 4 3 2 1', '--- ', '--- ']);
    })
  })
  
  describe('addDisc', function(){
    beforeEach(function(){
      board = [
        [5, 4, 3, 2, 1],
        [],
        []
      ];
    });
  
    it('should be able to add discs to the starting peg stack', function() {

      addDisc(3);
      
      expect(board[0].length).toBe(8);
    })
  })

  describe('addPeg', function(){
    beforeEach(function(){
      board = [
        [5, 4, 3, 2, 1],
        [],
        []
      ];
    });

    it('should add pegs to the board', function() {
      
      addPeg(2);
      
      expect(board.length).toEqual(5);
    })
  });

  describe('resetBoard', function(){
    beforeEach(function(){
      board = [
        [3, 2],
        [1],
        [5, 4]
      ];
      stateOfBoard = {
        numberOfPegs: 5,
        numberOfDiscs: 6,
        hasGameStarted: true,
        hasWinner: true
      }
    });

    it('should reset the game settings to starting values', function(){
      resetBoard();
      expect(board).toEqual([[5, 4, 3, 2, 1], [], []]);
      expect(stateOfBoard.numberOfPegs).toEqual(3);
      expect(stateOfBoard.numberOfDiscs).toEqual(5);
      expect(stateOfBoard.hasGameStarted).toBe(false);
      expect(stateOfBoard.hasWinner).toBe(false);
    });
  })

 

})



