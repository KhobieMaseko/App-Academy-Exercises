/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// your code here
function addToTwelve(arr, currentIndex = 0) {
  // Base case: If the array has less than two elements or we've reached the end of the array, return false.
  if (currentIndex >= arr.length - 1) {
    return false;
  }

  // Check if the current element and the next element sum up to 12.
  if (arr[currentIndex] + arr[currentIndex + 1] === 12) {
    return true;
  }

  // Recursively call the function with the next index.
  return addToTwelve(arr, currentIndex + 1);
}

// Test cases
// console.log(addToTwelve([1, 3, 4, 7, 5])); // true
// console.log(addToTwelve([1, 3, 4, 7, 6])); // false
// console.log(addToTwelve([1, 11, 4, 7, 6])); // true
// console.log(addToTwelve([1, 12, 4, 7, 6])); // false
// console.log(addToTwelve([1])); // false


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
