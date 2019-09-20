## Towers of Hanoi

This project has been created by a student at Project Shift, a software engineering fellowship located in Downtown Durham.  The work in this repository is wholly of the student based on a sample starter project that can be accessed by looking at the repository that this project forks.

If you have any questions about this project or the program in general, visit projectshift.io or email hello@projectshift.io.


# Towers of Hanoi Project
​
## Intro
​
First of all, happy Friday! This is the first of our Friday evaluations. Ideally, this assignment would include all the objectives from this past week, but there were a bunch, so we'll do our best, but let's first look at all that we've covered, in one large list!
​
By now, you should be able to:
​
- Explain the history and usefulness of JavaScript, and why we're learning it in particular vs. other languages
- Explain the order the JS engine evaluates LHS and RHS lookups
- Define asynchronous vs. synchronous
- Explain and utilize callbacks (and other various async implementations)
- Describe and implement a stack data-structure
- Describe and implement a queue data-structure
- Explain the stack, queue and event loop in the JS engine
- Explain how the stack, queue and event loop works in NodeJS
- Explain the difference between ES5, ES6, TypeScript and why they matter.
- Explain and evaluate what loosely typed and dynamic means.
- Define all the data-types in JavaScript.
- Explain what JavaScript's built-in objects are.
- Define what immutable and mutable data types are.
- Utilize `var`, `let` and `const` in the correct context.
- Identify which types/values are truthy/falsey.
- Write and utilize all the logical operators.
- Write and utilize all comparison operators.
- Explain the difference between `==` and `===`
- Explain how functions are objects
- How to invoke functions
- Identify the difference between function expressions and function declarations and why it matters
- Explain What `return` does
- Utilize some of the basic built-in objects and their methods to solve problems
- Define and identify scopes and how they're created
- Identify and explain what a closure is and why it's useful
- Utilize closures to create modules
- Utilize the `forEach`, `map`, `filter`, `find`, `every`, `some` and `reduce` helper methods.
- Declare objects using the object literal, object constructor and Object.create syntax
- Set and get object properties
- Identify the nuances of duplicating objects
- Iterating over objects
- Define how `this` works
- Define and utilize `bind`
- Use JavaScript arrow functions
- Explain the difference between class inheritance and prototypical inheritance and its impact on JavaScript
- Define and utilize prototypes in JavaScript
- Define and utilize the `new` keyword
- Explain why `new` might be considered old and outdated
- Utilize `call` to set the correct `this` context
- Mimic classes in JavaScript, though it's not suggested
- Identify and utilize ES6 classes and subclasses
- Explain why many developers see Object Oriented JavaScript as a bad thing
- Utilize prototypes to delegate behavior between objects
- Refactor Object Oriented code to utilize Objects Linking Other Objects
- Define and identify functional programming concepts
- Define and utilize pure functions
- Define higher order functions
- Explain why immutability is important in functional programming
- Explain one way to create performant immutable data Structures
- Utilize factory functions and functional mixins to compose programs
​
---
​
## The Challenge - Towers of Hanoi
​
For today's challenge, we're going to have you try to build a program that lets you play one of the most classic games that most programmers learn on. The goal of Towers of Hanoi is to move a set of discs of different sizes from one peg to another while only allowing the player to take the topmost disc off the peg and not putting a larger disc on top of a smaller one. Here is a site that lets you see the game being played with the ability to change the amount of pegs/discs: http://towersofhanoi.info/Animate.aspx.
​
The story goes that priests in a temple move 64 discs around 3 pegs to fulfill the prophecy that if they complete their task the world will end. Thankfully, based on the math that we know, to complete this task would take 2^64-1 seconds to complete, or ~585 billion years. We won't have you try to solve this puzzle. We suggest that you start with 3 - 5 discs in your initial solution.
​
For the most part, we will let you control your own structure and technique for this project unless stated that you must use a certain technique or function. Please be sure to follow the instructions, as we will be grading based on these instructions.
​
To start, [fork and clone this repo](https://github.com/projectshft/towers-of-hanoi). It's basically completely empty. You can add and remove whatever you want from the repo. When you're finished, submit a pull request so we can give you a code review and leave comments.
​
Here are the requirements:
​
- First of all it will need a `board`. We'll utilize a 2D array to do this:
​
```JavaScript
// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
[["5", "4", "3", "2", "1"],
[],
[]]
```
​
- We'll want to be able to print the board horizontally. You MUST utilize a `map` function at least once to accomplish this part of the assignment. The starting board will log the 2D array to the console like this (if you'd like a challenge, try printing the board vertically):
​
```JavaScript
--- 5 4 3 2 1
---
---
```
​
- Our game will progress with the player submitting moves to the game and the game accepting or rejecting the move and updating the board if the move is allowed. Remember, you must only move the top disc from the peg and you can't move a disc on top of another if it is bigger than that disc. For example with moves originating from the above starting board:
​
```JavaScript
// Move the disc from peg 1 to peg 2
board.moveDisc(1,2);
That move was successful, board is now:
--- 5 4 3 2
--- 1
---
​
// Move disc from peg 1 to peg 3
board.moveDisc(1,3);
That move was successful, board is now:
--- 5 4 3
--- 1
--- 2
​
// Move disc from peg 1 to peg 2
board.moveDisc(1,2);
You cannot move a larger disc on top of a smaller one, board is still:
--- 5 4 3
--- 1
--- 2
```
​
- There should be an object responsible for maintaining the state of the board and it should control the way to manipulate the inner state of the board. The board should maintain the number of moves that the player has done and output this value when the game completes.
- There should be a way to move discs from one peg to another.
- There should be a function that given a certain peg, determines which other pegs the top disc from that peg can be moved to. In order to complete this function, you MUST use a `filter` function at least once (HINT: If the user says they want to move a certain disc to another peg, wouldn't it be nice if you had a function that could take that disc size and look at all the pegs on the board and only return the ones that the disc you want to move would fit on?).
- There should be a function `checkWinner` that checks to see if the player has won the game. You win the game by putting all the discs back in the original order but on a new peg. As a part of this function, you MUST use the `reduce` function at least once. As a helpful hint, we suggest that you test this function with only 3 pegs and 3 discs on the board as it will take significantly less moves to "win".
- Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.
​
---
​
## Extension 1 (Optional)
​
Using Jasmine, write tests for our game to ensure that everything is working properly. You may want to use Google to determine what things you should test and what functions you should use for your tests. You should be able to use your library module exercise as a good starting point for how to setup/describe the tests.
​
---
​
## Extension 2 (Optional)
​
Build the ability to change the number of pegs/discs and update the game board and playing style.
​
---
​
## Extension 3 (Optional)
​
Display the board using HTML and accept user input via jQuery or other Web APIs.
​
---
​
## Extension 4 (Optional)
​
The classic presentation of this game is to build an algorithm to solve this game. The extension is to add a button or function of some kind that will automatically solve the puzzle from a given state. Be fully aware that this is very challenging and should require you to utilize a technique called recursion to make it happen. Finding the optimal number of moves to solve the problem with a variable amount of pegs/discs is a really hard problem and is actively an area of research. The explanation of why is found here: http://towersofhanoi.info/Tech.aspx
