/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
function flatten(arr) {
  let flattened = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(flatten(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }

  return flattened;
}



// examples:

// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
// console.log(flatten([1, [2, [3]]])); // [1, 2, 3]


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
