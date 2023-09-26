/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

function valuesInObject(obj) {
  // Your code here
  const values = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}


function valuesInObject(obj) {
  return Object.values(obj);
}


// examples:

// let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
// let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
// console.log(valuesInObject(animals)); // => ["Wolfie", "Jet", "Bilbo"]
// console.log(valuesInObject2(foods)); // => ["tart", "sour", "sweet"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
