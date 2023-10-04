/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

const mirrorArray = (array) => {
  // Your code here
  // Clone the input array to avoid modifying it
  const mirroredArray = [...array];

  // Reverse the cloned array
  const reversedPortion = mirroredArray.slice().reverse();

  // Concatenate the reversed portion with the original array
  return mirroredArray.concat(reversedPortion);
};


//examples:

// mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
// console.log(mirrorArray([1,2,3]));
// mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
// console.log(mirrorArray(['a', 'b', 'c', 'd']));


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mirrorArray;
} catch (e) {
  return null;
}
