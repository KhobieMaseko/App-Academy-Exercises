/*******************************************************************************
Write a function `exactly` that accepts an array, a number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
exactly `number` elements of the array that return true when passed into the callback.

Examples:

let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
    return n % 2 === 0;
});
console.log(result1); // true

let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
    return n % 2 === 0;
});
console.log(result2); // false

let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
    return str.includes('x');
});
console.log(result3); // false

let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
    return str.includes('x');
});
console.log(result4); // true

*******************************************************************************/

let exactly = function(arr, number, callback) {
    // Initialize a counter to keep track of the number of elements that match the callback.
  let count = 0;

  // Iterate through the array and apply the callback to each element.
  for (const element of arr) {
    if (callback(element)) {
      count++;
    }

    // If the count exceeds the desired number, return false.
    if (count > number) {
      return false;
    }
  }

  // Return true if the count matches the desired number exactly.
  return count === number;
};



// let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
//     return n % 2 === 0;
// });
// console.log(result1); // true

// let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
//     return n % 2 === 0;
// });
// console.log(result2); // false

// let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
//     return str.includes('x');
// });
// console.log(result3); // false

// let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
//     return str.includes('x');
// });
// console.log(result4); // true





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = exactly;
