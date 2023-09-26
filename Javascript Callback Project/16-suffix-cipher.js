/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function(sentence, suffixCallbacks) {
    // Split the sentence into an array of words
  const words = sentence.split(' ');

  // Create a new array to store the modified words
  const modifiedWords = [];

  // Iterate through each word in the sentence
  for (const word of words) {
    // Initialize a variable to store the modified word
    let modifiedWord = word;

    // Iterate through the suffixes in the suffixCallbacks object
    for (const suffix in suffixCallbacks) {
      // Check if the word ends with the current suffix
      if (word.endsWith(suffix)) {
        // Apply the corresponding callback function to modify the word
        modifiedWord = suffixCallbacks[suffix](word);
        break; // Stop iterating through suffixes once a match is found
      }
    }

    // Push the modified word to the modifiedWords array
    modifiedWords.push(modifiedWord);
  }

  // Join the modified words to form the new sentence
  const newSentence = modifiedWords.join(' ');

  return newSentence;
};


// let cipher1 = {
//     ly: function(word) {
//         return word.slice(0, -1) + 'ee';
//     },
//     ize: function(word) {
//         return word + 'r';
//     }
// };
// console.log(suffixCipher('quietly and gently visualize', cipher1));
// // quietlee and gentlee visualizer

// let cipher2 = {
//     tal: function(word) {
//         return word.toUpperCase();
//     },
//     s: function(word) {
//         return word + 'th';
//     }
// };
// console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// // INCREMENTAL progressth isth very INSTRUMENTAL



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
