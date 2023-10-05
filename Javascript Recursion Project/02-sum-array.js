/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// your code here
function sumArray(arr) {
  // Base case: if the array is empty, return 0
  if (arr.length === 0) {
    return 0;
  }

  // Recursive case: we add the first element to the sum of the rest of the elements
  return arr[0] + sumArray(arr.slice(1));
}



// examples

// console.log(sumArray([1, 2, 3])); //  6
// console.log(sumArray([0, 1, -3])); //  -2
// console.log(sumArray([1, 2, 3, 4, 5])); // 15


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
