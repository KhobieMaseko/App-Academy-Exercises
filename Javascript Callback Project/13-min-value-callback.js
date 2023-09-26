/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(arr, callback) {
    if (!callback) {
        // If no callback is provided, return the smallest value in the array
        if (arr.length === 0) {
          return undefined; // Handle empty array case
        }
        let smallest = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] < smallest) {
            smallest = arr[i];
          }
        }
        return smallest;
      } else {
        // If a callback is provided, find the smallest value and pass it to the callback
        if (arr.length === 0) {
          return undefined; // Handle empty array case
        }
        let smallest = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] < smallest) {
            smallest = arr[i];
          }
        }
        return callback(smallest);
      }
};


// console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
// console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
