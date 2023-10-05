/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here

function permutations(array) {
  // Base case: If the array has only one element, return it as a single-element array
  if (array.length === 1) {
    return [array];
  }

  const result = [];

  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    // Create a copy of the array without the current element
    const remainingElements = [...array.slice(0, i), ...array.slice(i + 1)];
    // Recursively calculate permutations for the remaining elements
    const subPermutations = permutations(remainingElements);

    // Combine the current element with each permutation of the remaining elements
    for (const subPermutation of subPermutations) {
      result.push([currentElement, ...subPermutation]);
    }
  }

  return result;
}


// examples:
// console.log(permutations([1, 2])); // [[1, 2], [2, 1]]
// console.log(permutations([1, 2, 3])); // [[1, 2, 3], [1, 3, 2],
//                         // [2, 1, 3], [2, 3, 1],
//                         // [3, 1, 2], [3, 2, 1]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
