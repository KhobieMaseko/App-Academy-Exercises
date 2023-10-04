/***********************************************************************
Write a function named `dynamicDivide(divisor)`. The dynamicDivide function will
return a new function that when invoked will divide the argument number by the
divisor.


Look below to see how this function is invoked:

const halfer = dynamicDivide(2); // returns a function
halfer(20); // returns 10

const divideByThree = dynamicDivide(3);
divideByThree(30); // returns 10

const  divideByFive = dynamicDivide(5);
divideByFive(50); // returns 10


***********************************************************************/

function dynamicDivide(divisor) {
  // Your code here
  // Return a new function that takes a number as an argument
  return function(number) {
    // Check if the divisor is not zero to avoid division by zero error
    if (divisor !== 0) {
      // Perform the division and return the result
      return number / divisor;
    } else {
      // Handles division by zero case
      throw new Error("Division by zero is not allowed.");
    }
  };
}


// example

// const halfer = dynamicDivide(2); // returns a function
// halfer(20); // returns 10
// console.log(halfer(20));

// const divideByThree = dynamicDivide(3);
// divideByThree(30); // returns 10
// console.log(divideByThree(30));

// const  divideByFive = dynamicDivide(5);
// divideByFive(50); // returns 10
// console.log(divideByFive(50));


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicDivide;
} catch (e) {
  return null;
}
