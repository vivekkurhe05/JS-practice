/**
 * Write a JavaScript program to create a shallow clone of an object.
 */

// my sol
const a = { x: true, y: 1 };

const b = Object.assign({}, a);

b.x = false;
console.log(a);
console.log(b);