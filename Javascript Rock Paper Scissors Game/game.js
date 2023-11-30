const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

// my constant Emoji representations of moves.
// These only work for updated terminal environments that have Unicode Support
const MOVE_EMOJIS = {
    r: '🪨', // Rock
    p: '📄', // Paper
    s: '✂️'  // Scissors
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/

function printHelp() {
    // Your code here
    // console.log("\nHelp:\n");
    console.log("  Type 'r' for Rock");
    console.log("  Type 'p' for Paper");
    console.log("  Type 's' for Scissors");
    console.log("  Type 'q' to quit");
    console.log("  Type 'h' for a list of valid commands\n");
}

function getWinner(move1, move2) {
    // Your code here
    if (move1 === move2) {
      return 0; // Tie
    }

    const move1WinsAgainst = VALID_MOVES[move1].winsAgainst;

    if (move1WinsAgainst === move2) {
      return 1; // move1 wins
    } else {
      return -1; // move1 loses
    }
}

function getCPUMove() {
    // Your code here
    const validMoveKeys = Object.keys(VALID_MOVES);
    const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
    return validMoveKeys[randomIndex];
}

function processMove(cmd, cpu) {
    // Your code here
    console.log(`You pick ${cmd}, computer picks ${cpu}.`);

    const result = getWinner(cmd, cpu);
    if (result === 0) {
      console.log("You tie.\n");
      ties++;
    } else if (result === 1) {
      console.log("You win!\n");
      wins++;
    } else {
      console.log("You lose...\n");
      losses++;
    }
}


/******************************* MAIN FUNCTION *******************************/
// original function

// function promptInput(rl) {
//     console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
//     rl.question('> ', (cmd) => {
//       cmd = cmd.toLowerCase();

//       if (cmd === 'h') {
//         console.log("\nHelp:\n");
//         console.log("  Type 'r' for Rock");
//         console.log("  Type 'p' for Paper");
//         console.log("  Type 's' for Scissors");
//         console.log("  Type 'q' to quit");
//         console.log("  Type 'h' for a list of valid commands\n");
//       } else if (cmd === 'q') {
//         rl.close();
//         return;
//       } else if (VALID_MOVES[cmd]){
//         const validMoveKeys = Object.keys(VALID_MOVES);
//         const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
//         const cpu = validMoveKeys[randomIndex];

//         console.log(`You pick ${cmd}, computer picks ${cpu}.`);

//         if (cmd === cpu) { // tie
//           console.log("You tie.\n");
//           ties++;
//         }
//         else if (VALID_MOVES[cmd].winsAgainst === cpu) { // win
//           console.log("You win!\n");
//           wins++;
//         } else { // loss
//           console.log("You lose...\n");
//           losses++;
//         }
//       } else {
//         console.log("\nInvalid command.\n");
//         console.log("  Type 'r' for Rock");
//         console.log("  Type 'p' for Paper");
//         console.log("  Type 's' for Scissors");
//         console.log("  Type 'q' to quit");
//         console.log("  Type 'h' for a list of valid commands\n");
//       }

//       promptInput(rl);
//     });
// }

// my refactored function:
// function promptInput(rl) {
//     console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
//     rl.question('> ', (cmd) => {
//       cmd = cmd.toLowerCase();

//       if (cmd === 'h') {
//         console.log("\nHelp:\n");
//         printHelp();
//       } else if (cmd === 'q') {
//         rl.close();
//         return;
//       } else if (VALID_MOVES[cmd]){
//         const cpu = getCPUMove();
//         processMove(cmd, cpu);

//         // Display moves using emojis
//         console.log(`You pick ${MOVE_EMOJIS[cmd]}, computer picks ${MOVE_EMOJIS[cpu]}.`);

//         // Display scoreboard after each round
//         console.log(`Scoreboard - You: ${wins}, Computer: ${losses}, Ties: ${ties}`);
//       } else {
//         console.log("\nInvalid command.\n");
//         printHelp();
//       }

//       promptInput(rl);
//     });
// }

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log("\nHelp:\n");
      printHelp();
    } else if (cmd === 'q') {
      rl.close();
      return;
    } else if (VALID_MOVES[cmd]){
      const cpu = getCPUMove();
      processMove(cmd, cpu);

      // Display moves using emojis
      console.log(`You pick ${MOVE_EMOJIS[cmd]}, computer picks ${MOVE_EMOJIS[cpu]}.`);

      // Update game state after the user inputs 'r', 'p', or 's' commands
      const result = getWinner(cmd, cpu);
      if (result === 1) {
        console.log("You win!\n");
        wins++;
      } else if (result === -1) {
        console.log("You lose...\n");
        losses++;
      } else {
        console.log("You tie.\n");
        ties++;
      }

      // Display scoreboard after each round
      console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
    } else {
      console.log("\nInvalid command.\n");
      printHelp();
    }

    promptInput(rl);
  });
}


/****************************** INITIALIZE GAME ******************************/
// original function:

// function initializeGame() {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });
//     console.log("Welcome to Rock/Paper/Scissors\n");
//     console.log("  Type 'r' for Rock");
//     console.log("  Type 'p' for Paper");
//     console.log("  Type 's' for Scissors");
//     console.log("  Type 'q' to quit");
//     console.log("  Type 'h' for a list of valid commands\n");

//     promptInput(rl);
// }

// my version:

function initializeGame() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    console.log("Welcome to Rock/Paper/Scissors\n");
    printHelp();

    promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
    initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
    printHelp,
    getWinner,
    getCPUMove,
    processMove,
    promptInput
};
