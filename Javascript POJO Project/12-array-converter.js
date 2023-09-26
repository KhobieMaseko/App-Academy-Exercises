/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  // Your code here
  const countObj = {}; // Initialize an empty object to store counts

  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    // Check if the value exists as a key in the countObj
    if (countObj[value] === undefined) {
      // If not, initialize it with a count of 1
      countObj[value] = 1;
    } else {
      // If it already exists, increment the count
      countObj[value]++;
    }
  }
  return countObj; // Return the object with counts
}


// console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
// console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
// console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
