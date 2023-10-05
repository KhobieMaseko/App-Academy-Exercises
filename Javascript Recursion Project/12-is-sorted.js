/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here
function isSorted(arr, index = 0) {
  // Base case: If we have reached the end of the array, it's sorted.
  if (index === arr.length - 1) {
    return true;
  }

  // Check if the current element is greater than the next element.
  if (arr[index] > arr[index + 1]) {
    return false;
  }

  // Recursively check the next pair of elements.
  return isSorted(arr, index + 1);
}

// Test cases
// console.log(isSorted([1, 2, 3, 4, 5])); // true
// console.log(isSorted([1, 2, 4, 3, 5])); // false
// console.log(isSorted([2, 4, 6, 7, 8])); // true
// console.log(isSorted([5, 4, 3, 2, 1])); // false


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
