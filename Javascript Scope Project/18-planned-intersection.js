/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

*******************************************************************************/

function plannedIntersect(firstArr) {
  // Create a Set from the first array for efficient lookup
  const firstSet = new Set(firstArr);

  // Define the intersection function
  function intersection(secondArr) {
    // Create a new array to store the common elements
    const result = [];

    // Iterate through the second array
    for (const element of secondArr) {
      // If the element is in the first array (Set), add it to the result array
      if (firstSet.has(element)) {
        result.push(element);
      }
    }

    return result;
  }

  return intersection;
}


// examples

// //Example 1:
// let abc = plannedIntersect(["a", "b", "c"]); // returns a function
// console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

// //Example 2:
// let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
// console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
try {
  module.exports = plannedIntersect;
} catch (e) {
  return null;
}
