/***********************************************************************
Write a function named interrupter that accepts a single parameter `interruptingWord`:
  `interrupter(interruptingWord)`
The interrupter function should return a function.
When the function returned by interrupter is called with a sentence,
the sentence will be returned with the original interruptingWord inserted
between each word in the sentence.

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

function interrupter(interruptingWord) {
  // Your code here
  // Return a function that takes a sentence as an argument
  return function(sentence) {
    // Split the sentence into words using space as the delimiter
    const words = sentence.split(" ");

    // Use Array.reduce to insert the interruptingWord between each word
    const interruptedSentence = words.reduce((result, word, index) => {
      // Add the word to the result string
      result += word;

      // If it's not the last word, add the interruptingWord
      if (index < words.length - 1) {
        result += ` ${interruptingWord} `;
      }

      return result;
    }, "");

    return interruptedSentence;
  };
}


// examples:

// let rudePerson = interrupter("what"); // => returns a function
// console.log(rudePerson("how are you")); // prints "how what are what you"
// console.log(rudePerson("I like pie")); // prints "I what like what pie"


// // Invoking the interrupter function again:
// let rudePerson2 = interrupter("yo"); // => returns a function
// console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = interrupter;
} catch (e) {
  return null;
}
