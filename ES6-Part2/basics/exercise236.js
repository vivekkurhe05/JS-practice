/**
 * Write a JavaScript program to get the first key that satisfies the provided testing function. 
 * Otherwise return undefined.
 */

function findKey(obj, fn) {
    return Object.keys(obj).find(key => fn(obj[key], key, obj));
}

console.log(findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active'] // Check if the 'active' property of the object is true
));