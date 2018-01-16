const main = function() {
  // body...

  // This data will help with some logic in the game.
  var data = {
    board: [
      ['1', '2','3'],
      ['4', '5','6'],
      ['7', '8','9']
    ],
    playerWins: false,
    counter: 0,
    positionsTaken: ['0']
  }
  // Get name of players. Save them in an array
  const player1Name = prompt("What is player 1 name?");
  const player2Name = prompt("What is player 2 name?");
  const players = [player1Name, player2Name];
  // Array to choose a random character (X or O)
  let chars = ['X', 'O'];
  let getPlayer1Char = chars[getRandomInt(chars.length)];
  getPlayer2Char = '';
  // Give the opposite character to the user2 depending,
  // on what user1 got in the random selector.
  if(getPlayer1Char == 'X') {
    getPlayer2Char = 'O'
  } else {
    getPlayer2Char = 'X'
  }
  // Array to choose a random character to player1,
  // which will go first. Basically getting a random player to go first.
  let getPlayer1 = players[getRandomInt(chars.length)];
  let getPlayer2 = '';
  if(getPlayer1 === player1Name) {
    getPlayer2 = player2Name;
  } else {
    getPlayer2 = player1Name;
  }
  // Create the players with their information.
  const player1 = new Player(getPlayer1, getPlayer1Char);
  const player2 = new Player(getPlayer2, getPlayer2Char);

  console.log(`Player1 = ${player1.name}, player2 = ${player2.name}`);
  console.log(`Player1 = ${player1.char}, player2 = ${player2.char}`);
  // Create a new game with the 2 players information and the data object.
  let game = new Game(player1, player2, data);
  // Let the users know which character was chosen for them.
  prompt(`${getPlayer1}, you are ${getPlayer1Char}. \n ${getPlayer2}, you are ${getPlayer2Char}. \n Press Enter to continue`);
  // start the game with the start method
  game.start(data);


}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Player {
    constructor(name, char, choices = [], winner = false) {
      this.name = name;
      this.char = char;
      this.choices = choices;
      this.winner = winner;
    }

  addChoice(choice) {
    console.log(choice);
  }

}
// There should be some kind of function for play that takes the position the player wants to play. For each play, it should switch which player is currently playing (so no player can go two times in a row).
// There needs to be some kind of function to checkWinner to see if anyone has won. This part is pretty hard as you have to check if a player has won vertically, horizontally or diagonally, OR if there's a tie.
// Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.

class Game {
  // player 1 and two are objects...?...
  constructor(player1, player2, data) {
    this.player1 = player1;
    this.player2 = player2;
    this.data = data;
    // Use sets to get unique values.
    this.winnerSets = new Set(
      [ "123", "147", "159", "258", "369", "357", "456", "789"]
      );
  }

  replaceChar(player, stateArr) {
    // Ask user to choose a number/position
    let position = prompt(`${player.name} turn, you are ${player.char}, choose a position(number).`);
    // If the user choose a number that has been chosen before ask again.
    while (this.data.positionsTaken.includes(position) || (position > 9 || position < 1)) {
      position = prompt(`${player.name} that number has been chosen or you typed an invalid number, try again.`);
    }
    // If user types a non numeric value and parse it we get NaN, reverse the value to true to ask again for a new choice.
    // Fallback so the user does not use other number greater than nine
    while (!parseInt(position) || position > 9) {
      position = prompt(`${player.name} that was not a choice, try again.`);
    }
    // if=> checks if the position is a valid choice.
    if (this.data.board.join(',').includes(position)) {
      // push to the data object to keep track of numbers/positions taken.
      this.data.positionsTaken.push(position);
      // Will map through the 2D array to replace the players choice,
      // with their character/symbol.
      stateArr.board.map(function(row, index) {

        if (row.includes(position)) {
          // Keep track of players choices to check for win patterns.
          player.choices = player.choices.concat(position);
          // look for players choice and replace the number with the symbol
          let newRow = row.map(function(item) {
            return item == position ? player.char : item;
          }); //End map

          // replace with new row/array to not modify the previous one.
          return stateArr.board[index] = newRow;

        } //If statement
      }) // End forEach array
    }

    return stateArr
  }
  play(player, data) {
    // invoke next method to check and raplce the users choice.
    this.replaceChar(player, data)
    // counter to check when the game has reached all nine turns
    data.counter += 1;
    // start checking for patterns to see if player wins.
    if (data.counter >= 5) {
      let playerWon = this.checkWinner(player);
      // If player wins change its attributes to True.
      if (playerWon) {
        this.showBoard(data);
        data.playerWins = true;
        player.winner = true;
      } else if(data.counter === 9) {
        this.showBoard(data);
        let playAgain = prompt('Tie, do you want to play again?, y or Y = yes, n or N to stop the game.').toLowerCase();
        if (playAgain === 'y') {
          main();
        } else {
          throw new Error("Game Over, thanks for playing");
        }
      }
    }
  } // End play

  // start method
  start(data) {
    while (data.playerWins !== true) {
      // show the (numbers)colums and rows of the game.
      this.showBoard(data);
      // get each player to play once, alternating after the other.
      // as long the player has not won.
      this.play(this.player1, data);
      // this could be way better, will refactor after submitting
      if (this.player1.winner === true) {
        alert(`Congratulations ${this.player1.name} you won!`);
        let playAgain = prompt('Do you want to play again?, y or Y = yes, n or N to stop the game.').toLowerCase();
        if (playAgain === 'y') {
          main();
        } else {
          throw new Error("Game Over, thanks for playing");
        }
      } else {
        // show the (numbers)colums and rows of the game.
        this.showBoard(data);
        // get each player to play once, alternating after the other.
        // as long the player has not won.
        this.play(this.player2, data);
        if (this.player2.winner === true) {
          alert(`Congratulations ${this.player2.name} you won!`);
          let playAgain = prompt('Do you want to play again?, y or Y = yes, n or N to stop the game.').toLowerCase();
          if (playAgain === 'y') {
            main();
          } else {
            throw new Error("Game Over, thanks for playing");
          }
        }
      }
    }

  }


  showBoard(data) {
    let joinRows = data.board.map(function(row, index) {
      return row.join('')
    }) // End map array
    // console.log(joinRows);

    let formattedArray = joinRows.join('\n')
    console.log(formattedArray);
    // return formattedArray
  }

  // Algorithm borrowed from https://gist.github.com/axelpale/3118596.
  // I modified it to work with the patterns of the TIC-TAC-TOE game.
  k_combinations(set, k) {
  	var i, j, combs, head, tailcombs;

  	// There is no way to take e.g. sets of 5 elements from
  	// a set of 4.
  	if (k > set.length || k <= 0) {
  		return [];
  	}

  	// K-sized set has only one K-sized subset.
  	if (k == set.length) {
      // modified by Jorge R. to be able to match win patterns.
  		return [set.join('')];
  	}

  	// There is N 1-sized subsets in a N-sized set.
  	if (k == 1) {
  		combs = [];
  		for (i = 0; i < set.length; i++) {
  			combs.push([set[i]]);
  		}
  		return combs;
  	}

  	// Assert {1 < k < set.length}

  	// Algorithm description:
  	// To get k-combinations of a set, we want to join each element
  	// with all (k-1)-combinations of the other elements. The set of
  	// these k-sized sets would be the desired result. However, as we
  	// represent sets with lists, we need to take duplicates into
  	// account. To avoid producing duplicates and also unnecessary
  	// computing, we use the following approach: each element i
  	// divides the list into three: the preceding elements, the
  	// current element i, and the subsequent elements. For the first
  	// element, the list of preceding elements is empty. For element i,
  	// we compute the (k-1)-computations of the subsequent elements,
  	// join each with the element i, and store the joined to the set of
  	// computed k-combinations. We do not need to take the preceding
  	// elements into account, because they have already been the i:th
  	// element so they are already computed and stored. When the length
  	// of the subsequent list drops below (k-1), we cannot find any
  	// (k-1)-combs, hence the upper limit for the iteration:
  	combs = [];
  	for (i = 0; i < set.length - k + 1; i++) {
  		// head is a list that includes only our current element.
  		head = set.slice(i, i + 1);
  		// We take smaller combinations from the subsequent elements
  		tailcombs = this.k_combinations(set.slice(i + 1), k - 1);
  		// For each (k-1)-combination we join it with the current
  		// and store it to the set of k-combinations.
  		for (j = 0; j < tailcombs.length; j++) {
        // modified by Jorge R. to be able to match win patterns.
  			combs.push(head.concat(tailcombs[j]).join(''));
  		}
  	}
  	return combs;
  } // End getSets

  // check if anyone has won
  checkWinner(player) {
    // sort player's choices to match win patters.
    let sortedPlayerChoices = player.choices.sort()
    // run k_combinations method to return array of 3's patterns from user choices.
    let setChoices = this.k_combinations(player.choices, 3);
    // indicates whether an element with the specified value exists in a Set.
    // Return true if matching pattern exists in our win values/sets.
    return setChoices.some((choice) => {
      return this.winnerSets.has(choice);
    });

  }

}

// Run the game!.
main();
