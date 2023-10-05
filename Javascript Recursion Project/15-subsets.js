/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here

function subsets(arr) {
  if (arr.length === 0) {
    return [[]]; // Base case: an empty array has one subset, which is the empty array itself.
  }

  const firstElement = arr[0];
  const restOfArray = arr.slice(1);

  // Recursively compute subsets without the first element
  const subsetsWithoutFirst = subsets(restOfArray);

  // For each subset without the first element, add a new subset including the first element
  const subsetsWithFirst = subsetsWithoutFirst.map(subset => [firstElement, ...subset]);

  // Combine both subsets arrays
  return [...subsetsWithoutFirst, ...subsetsWithFirst];
}



// Test cases
// console.log(subsets([]));         // [[]]
// console.log(subsets([1]));        // [[], [1]]
// console.log(subsets([1, 2]));     // [[], [1], [2], [1, 2]]
// console.log(subsets([1, 2, 3]));  // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
