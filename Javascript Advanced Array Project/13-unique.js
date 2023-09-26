/*
Write a function `unique` that accepts an array as an argument. The function
should return a new array containing elements of the input array, without
duplicates.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']

*/

let unique = function(array) {
    // Your code here
    // Create an empty object to keep track of unique elements
    const uniqueElements = {};

    // Use the filter method to iterate over the array
    const result = array.filter((item) => {
    // If the item is not in the uniqueElements object, add it and return true
        if (!uniqueElements[item]) {
            uniqueElements[item] = true;
            return true;
    }
    // If the item is already in the uniqueElements object, return false
    return false;
  });

  return result;
};


// console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
// console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
// console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = unique;
} catch (e) {
    module.exports = null;
}
