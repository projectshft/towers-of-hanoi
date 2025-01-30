# Towers of Hanoi (JavaScript Console Game)

This is a simple JavaScript implementation of the Towers of Hanoi game, playable in the console.

## Features
- Supports a customizable number of pegs (default is 3, between 3 and 6 allowed)
- Default number of rings is 5
- Move rings between pegs following the Towers of Hanoi rules
- Detects and announces when the game is won

## How to Play
1. Run the script in a JavaScript environment that supports `prompt()` (e.g., browser console).
2. Enter the number of pegs you want to play with (leave blank for the default of 3).
3. Move rings by selecting a peg to take from and a peg to place on.
4. Follow the rule: you cannot place a larger ring on top of a smaller ring.
5. The goal is to move all rings to another peg while following the rules.
6. Enter `quit` at any time to exit the game.

## Game Flow
- The game starts by asking for the number of pegs.
- The board state is displayed after every move.
- If an invalid move is attempted, an error message is shown, and the board remains unchanged.
- The game continues until all rings are moved in the correct order to another peg.

## Running the Game
- Open a browser console or a JavaScript runtime that supports `prompt()`.
- Copy and paste the script into the console.
- Follow the instructions to play.

Enjoy solving the Towers of Hanoi!

