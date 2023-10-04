/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/

function sandwichMaker() {
  let ingredients = ["tomato"];

  return function (newIngredient) {
    ingredients.push(newIngredient);
    let sandwichString = "One sandwich with " + ingredients.join(" and ");
    return sandwichString;
  };
}

// Example usage:

// let sandwich = sandwichMaker();
// console.log(sandwich("spinach")); // "One sandwich with tomato and spinach"
// console.log(sandwich("jelly")); // "One sandwich with tomato and spinach and jelly"
// console.log(sandwich("bread")); // "One sandwich with tomato and spinach and jelly and bread"

// // Another sandwich
// let sandwich2 = sandwichMaker();
// console.log(sandwich2("pb")); // "One sandwich with tomato and pb"



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = sandwichMaker;
} catch (e) {
  return null;
}
