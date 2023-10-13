const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomNumber() {
    return Math.floor(Math.random() * (60 - 10 + 1)) + 10;
}

let wins = 0;
let losses = 0;
let consecutiveLosses = 0;
let minimumLoss = getRandomNumber();

function spinReels() {
    const symbols = ['Cherry', 'Bell', 'Orange', 'Star', 'Seven'];
    const result = [];
    for (let i = 0; i < 3; i++) {
        result.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    return result;
}

function checkWin(combination) {
    if (wins === 0 || consecutiveLosses >= minimumLoss) {
        return new Set(combination).size === 1;
    }
    return false;
}

function shittySlotMachine() {
    rl.question('Press Enter to pull the lever...', () => {
        const combination = spinReels();
        console.log('Result:', combination.join(' | '));
        if (wins > 0 && consecutiveLosses >= 50) {
            wins++;
            console.log(`Congratulations! You win intentionally LMAO! But you lost ${consecutiveLosses} times.`);
            consecutiveLosses = 0; // Reset consecutive losses if user wins
            minimumLoss = getRandomNumber();
        } else if (checkWin(combination)) {
            wins++;
            console.log(`Congratulations! You win! Oops, but you lost ${consecutiveLosses} times.`);
            consecutiveLosses = 0; // Reset consecutive losses if user wins
            minimumLoss = getRandomNumber();
        } else {
            losses++;
            consecutiveLosses++;
            console.log(`Sorry, you didn't win this time.\nWins: ${wins}\nLosses: ${losses}\nConsecutive Losses: ${consecutiveLosses}\nMinimum loss before win: ${minimumLoss}\n\n`);
        }
        shittySlotMachine();
    });
}

function playSlotMachine() {
    console.log('Welcome to the Slot Machine Game!');
    shittySlotMachine();
}

playSlotMachine();
