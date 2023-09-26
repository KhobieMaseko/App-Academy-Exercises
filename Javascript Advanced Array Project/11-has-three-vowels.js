/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    // Your code here
    // Convert the string to lowercase to make the comparison case-insensitive
    string = string.toLowerCase();

    // Define an array of unique vowels
    const uniqueVowels = ['a', 'e', 'i', 'o', 'u'];

    // Use the filter() method to create an array of characters that are vowels
    const vowelChars = Array.from(string).filter(char => uniqueVowels.includes(char));

    // Use a Set to eliminate duplicate vowels and check if there are at least three different vowels
    const uniqueVowelsCount = new Set(vowelChars).size;

    return uniqueVowelsCount >= 3;
};


// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
