# Towers of Hanoi

A browser-console Towers of Hanoi game, built as a Parsity student project (forked from a starter, with a “Completed project” commit in this repository).

The page (`index.html`) loads `main.js`, creates a game with five discs, and prints the board to the console. You play by calling methods on the `game` object in the browser console. Pegs are indexed 0, 1, and 2. A move is rejected if the source peg is empty or if it would place a larger disc on a smaller one.

## Features

- `TowersOfHanoi` class with `printBoard()`, `moveDisc(fromPeg, toPeg)`, `checkWinner()`, and `resetGame()`
- Example move calls are included as comments in `main.js`
- A commented recursive solver remains at the top of the file

## Tech stack

- JavaScript and HTML (no build step, no dependencies)

## Getting started

Open `index.html` in a browser, then open the developer console.

```js
game.printBoard();
game.moveDisc(0, 1); // move the top disc from peg 0 to peg 1
game.checkWinner();
```

You can also run the script with Node (`node main.js`) to print the starting board, but the intended way to play is the browser console.
