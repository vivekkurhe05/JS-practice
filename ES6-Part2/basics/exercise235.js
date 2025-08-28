/**
 * Write a JavaScript program to get the last key that satisfies the provided testing function, 
 * otherwise undefined is returned.
 */

function findLastKey(obj, fn) {
    return Object.keys(obj).reverse().find(key => fn(obj[key], key, obj));
}

console.log(findLastKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active'] // Check if the 'active' property of the object is true
)); // Output: 'pebbles'