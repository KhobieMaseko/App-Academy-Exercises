/** Guessing Game Project
 * Institution: App Academy Online
 * Project link: https://my.appacademy.io/lessons/user-input/0e404b7c/practices/guessing-game-project/d236f9b6
 * Author: Khobie Maseko
 * Date: 17/10/2023
 */


// Our objective for this project is to build a simple game where the user has to guess a secret number
// ... that is chosen at random.
// Upon making a guess, the user will receive a hint indicating if their guess is too small or too large.


// 'readline' module to handle user input.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// Initialize global variables:

let secretNumber;
let numAttempts;


// Function returns a random whole number between the provided minimum and maximum (inclusive).

const randomInRange = (min, max) => {
    // Use Math.floor to ensure the result is a whole number.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// It compares that argument against the global secretNumber
// Accepts a number as an argument

const checkGuess = (number) => {
    if (number > secretNumber) {
      console.log('Too high.');
      return false;
    } else if (number < secretNumber) {
      console.log('Too low.');
      return false;
    } else {
      console.log('Correct!');
      return true;
    }
};


// Request guess from user until their guess is right

const askGuess = () => {
    rl.question(`Enter a guess (Attempts left: ${numAttempts}): `, (userInput) => {
      const userGuess = Number(userInput);

      if (checkGuess(userGuess)) {
        console.log('You win!');
        rl.close();
      } else {
        numAttempts--; // Decrement the number of remaining attempts
        if (numAttempts === 0) {
          console.log('You Lose');
          rl.close();
        } else {
          console.log('Incorrect guess. Try again.');
          askGuess(); // Call askGuess again for another guess
        }
      }
    });
};


// Asks the user for the range of the min, max numbers.

const askRange = () => {
    rl.question('Enter a min number: ', (minInput) => {    // Enter a min number
        const min = Number(minInput);

        rl.question('Enter a max number: ', (maxInput) => {   // Enter a max number
            const max = Number(maxInput);
            console.log(`I'm thinking of a number between ${min} and ${max}...`);

            // Secret number randomly chosen
            secretNumber = randomInRange(min, max);


            askGuess(); // Goes to askGuess function.
        });
    });
};


// We limit the number of turns
// User can input number of tries they would like to have

const askLimit = () => {
    rl.question('Enter the number of attempts: ', (userInput) => {
      numAttempts = Number(userInput);
      if (isNaN(numAttempts) || numAttempts <= 0) {
        console.log('Please enter a valid number of attempts.');
        askLimit(); // Ask for the number of attempts again
      } else {
        askRange(); // Move to the next step, which is asking for the range
      }
    });
  };


askLimit(); // begins game

