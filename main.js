const towersOfHanoi = function () {
  var board = [
    [5, 4, 3, 2, 1],
    [],
    []
  ];

  const numberOfDisc = 5;

  const startingBoard = function () {
    board.map(function (towers) {
      return console.log(`--- ${towers.join(' ')}`);
    });
  };

  const moveDisc = function (fromTower, toTower) {
    const discFromTower = fromTower - 1;
    const discToTower = toTower - 1;
    const discFromTowerLastElement = board[discFromTower].length -1;
    const discToTowerLastElement = board[discToTower].length -1;

    if (board[discFromTower][discFromTowerLastElement] > board[discToTower][discToTowerLastElement]) {
      console.log('You cannot move a larger disc on top of a smaller one, board is still:');
      startingBoard();
    } else {
        board[discToTower].push(board[discFromTower].pop());
        console.log('That move was successful, board is now:');
        startingBoard();
        checkWinner();
      };
    
  };

  const checkWinner = function () {
    if (board[0].length === 0 || board[0] === undefined) {
      if (numberOfDisc === board[1].length || numberOfDisc === board[2].length) {
        console.log('Congratulations! You won!');
        resetBoardForNewGame();
      };
    };
  };

  const resetBoardForNewGame = function () {
    console.log("Let's play again! New Game?");
    board = [
      [5, 4, 3, 2, 1],
      [],
      []
    ];
    startingBoard();
  };

  return {
    startingBoard: startingBoard,
    moveDisc: moveDisc,
    checkWinner: checkWinner,
    resetBoardForNewGame: resetBoardForNewGame
  };
};


const game = towersOfHanoi();

game.startingBoard();

const winningScenario = function () {
  game.moveDisc(1, 2);
  game.moveDisc(1, 3);
  game.moveDisc(2, 3);
  game.moveDisc(1, 2);
  game.moveDisc(3, 1);
  game.moveDisc(3, 2);
  game.moveDisc(1, 3);
  game.moveDisc(2, 1);
  game.moveDisc(1, 2);
  game.moveDisc(3, 2);
  game.moveDisc(1, 3);
  game.moveDisc(2, 3);
  game.moveDisc(2, 1);
  game.moveDisc(3, 1);
  game.moveDisc(2, 3);
  game.moveDisc(1, 2);
  game.moveDisc(1, 3);
  game.moveDisc(2, 3);
  game.moveDisc(1, 2);
  game.moveDisc(3, 1);
  game.moveDisc(3, 2);
  game.moveDisc(1, 2);
  game.moveDisc(3, 1);
  game.moveDisc(2, 3);
  game.moveDisc(2, 1);
  game.moveDisc(3, 1);
  game.moveDisc(3, 2);
  game.moveDisc(1, 2);
  game.moveDisc(1, 3);
  game.moveDisc(2, 3);
  game.moveDisc(1, 2);
  game.moveDisc(3, 1);
  game.moveDisc(3, 2);
  game.moveDisc(1, 2);
};

winningScenario(); 