/*

Write a function `sumWithReduce(nums)` that takes in an array of numbers.
The function should return the total sum of all numbers in the array.

Solve this using Array's `reduce()` method.

Examples:

console.log(sumWithReduce([10, 3, 5, 2])); // 20
console.log(sumWithReduce([])); // 0

*/

let sumWithReduce = function(nums) {
  // Your code here
  // Use the reduce method to sum all numbers in the array
  const Sum = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0); // 0 is the initial value of the accumulator

  return Sum;
};


// console.log(sumWithReduce([10, 3, 5, 2])); // 20
// console.log(sumWithReduce([])); // 0
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sumWithReduce;
} catch (e) {
  module.exports = null;
}
