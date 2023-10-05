/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here
function reverse(string) {
  // Base case: if the string is empty or has only one character, return it as is
  if (string.length <= 1) {
    return string;
  }

  // Recursive case: reverse the substring excluding the first character
  // and concatenate the first character at the end
  return reverse(string.slice(1)) + string[0];
}

// Test cases
// console.log(reverse("house")); // "esuoh"
// console.log(reverse("dog")); // "god"
// console.log(reverse("atom")); // "mota"
// console.log(reverse("q")); // "q"
// console.log(reverse("id")); // "di"
// console.log(reverse("")); // ""


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
