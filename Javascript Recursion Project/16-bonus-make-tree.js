/***********************************************************************
Write a recursive function `makeTree(categories, parent)` that takes an array of
categories objects, each of which have an id property, and a parent property and
returns a nested tree of those objects using the parent properties to construct
the tree.

A parent value of null means you are at the bottom of the tree and the category
has no parent, so the default value parent is be null if no parent is
provided.

Example 1:

Given an array of objects with id properties to create our tree:

const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

We should return a tree like this:

{
  animals: {
    mammals: {}
  }
}

Example 2:
Now imagine we have a database that returns a bunch of rows of data:

const categories2 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
];

Then we call the function with the categories:
const tree2 = makeTree(categories2, null);

The call above should return the tree below:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua: {},
                labrador: {}
            },
            cats: {
                persian: {},
                siamese: {}
            }
        }
    }
}

***********************************************************************/

// your code here

const makeTree = (categories, parent = null) => {
  const tree = {};
  categories
    .filter(category => category.parent === parent)
    .forEach(category => {
      const subcategories = makeTree(categories, category.id);
      if (Object.keys(subcategories).length > 0) {
        tree[category.id] = subcategories;
      } else {
        tree[category.id] = {};
      }
    });
  return tree;
};


// // Example 1
// const categories1 = [
//   { id: 'animals', parent: null },
//   { id: 'mammals', parent: 'animals' }
// ];

// const tree1 = makeTree(categories1, null);
// console.log(tree1);

// // Example 2
// const categories2 = [
//   { id: 'animals', parent: null },
//   { id: 'mammals', parent: 'animals' },
//   { id: 'cats', parent: 'mammals' },
//   { id: 'dogs', parent: 'mammals' },
//   { id: 'chihuahua', parent: 'dogs' },
//   { id: 'labrador', parent: 'dogs' },
//   { id: 'persian', parent: 'cats' },
//   { id: 'siamese', parent: 'cats' }
// ];

// const tree2 = makeTree(categories2, null);
// console.log(tree2);



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeTree;
} catch (e) {
  module.exports = null;
}

// This problem was inspired by a Fun Fun Function video:
// https://www.youtube.com/watch?v=k7-N8R0-KY4
