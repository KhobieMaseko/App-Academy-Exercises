/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


// your code here
function range(start, end) {
  // Base case: if the end is less than or equal to start, return an empty array
  if (end <= start) {
    return [];
  }

  // Recursive case: call range recursively with the incremented start and end
  return [start].concat(range(start + 1, end));
}


// Examples
// console.log(range(1, 5)); // [1, 2, 3, 4]
// console.log(range(3, 4)); // [3]
// console.log(range(7, 6)); // []



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
