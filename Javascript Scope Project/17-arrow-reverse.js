/***********************************************************************
Write a function reverseStr(str) that accepts a string and returns that string
reversed.

Write this function using a fat arrow function!

Examples:
let result1 = reverseStr("hello"); // returns "olleh"
let result2 = reverseStr("garden"); // returns "nedrag"
let result3 = reverseStr("potato"); // returns "otatop"


***********************************************************************/

// Your code here
const reverseStr = (str) => {
  // Split the string into an array of characters, reverse it, and join it back into a string
  return str.split('').reverse().join('');
};


// examples

// let result1 = reverseStr("hello"); // returns "olleh"
// console.log(result1);

// let result2 = reverseStr("garden"); // returns "nedrag"
// console.log(result2);

// let result3 = reverseStr("potato"); // returns "otatop"
// console.log(result3);


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = reverseStr;
  } catch (e) {
    return null;
  }
