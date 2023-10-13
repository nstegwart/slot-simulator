## Shitty Slot Machine

This repository contains a simple console-based slot machine game implemented in JavaScript. The game simulates a basic slot machine where the player can win intentionally after experiencing a certain number of consecutive losses. If the player wins, the consecutive losses counter is reset, and a new minimum loss value is generated. If the player loses, the consecutive losses counter is incremented, and the game continues.

### Algorithm Explanation:

1. **Initialization:**
   - The program initializes a readline interface to receive user input from the console.
   - A function `getRandomNumber()` generates a random number between 10 and 60 (inclusive) and assigns it to the variable `minimumLoss`.
   - Variables `wins` and `losses` are initialized to track the number of wins and losses.
   - `consecutiveLosses` is initialized to keep track of the number of consecutive losses.

2. **Generating Random Symbols:**
   - A function `spinReels()` randomly selects three symbols (`'Cherry'`, `'Bell'`, `'Orange'`, `'Star'`, or `'Seven'`) and returns them as an array. These symbols simulate the spinning reels of a slot machine.

3. **Checking for Wins:**
   - The function `checkWin(combination)` checks whether the symbols in the combination array are the same. If `wins` is 0 or the number of consecutive losses (`consecutiveLosses`) is greater than or equal to the `minimumLoss`, the function checks if all symbols are the same. If so, it returns `true`, indicating a win. Otherwise, it returns `false`.

4. **Slot Machine Logic:**
   - The `shittySlotMachine()` function runs the logic of the slot machine game.
   - It prompts the user to press Enter to pull the lever.
   - It generates a random combination of symbols using the `spinReels()` function.
   - If the user has won at least once (`wins > 0`) and has experienced 50 consecutive losses, they win intentionally. Otherwise, it checks if the current combination is a winning one using `checkWin(combination)`.
   - If the user wins, it congratulates them, resets the `consecutiveLosses` counter, and generates a new `minimumLoss` value using `getRandomNumber()`.
   - If the user loses, it increments the `consecutiveLosses` counter, displays the current win and loss statistics, and continues the game.

5. **Game Loop:**
   - The program starts the game by calling the `playSlotMachine()` function, which displays a welcome message and then calls `shittySlotMachine()`.
   - The game continues in a loop, allowing the user to play multiple rounds. After each round, it displays the result and prompts the user to play again by calling `shittySlotMachine()` recursively.

### How to Run:
- Clone the repository.
- Navigate to the project directory in the terminal.
- Run the command `node slot.js` to start the game.

### Additional Information:
To check the discussion thread related to this project, please visit [this Twitter thread](https://twitter.com/wdyhere/status/1712934338403455456).

Have fun playing the Shitty Slot Machine!