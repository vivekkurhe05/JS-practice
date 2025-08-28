/**
 * Write a JavaScript program to find the index of an array item in a for loop.
 */

const colors = ['Red', 'Green', 'Black', 'White'];

for (let [index, item] of colors.entries()) {
  console.log(`${index}: ${item}`);
}

// or

colors.forEach((el, i) => console.log(`${i}: ${el}`))