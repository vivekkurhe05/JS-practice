/**
 * Write a JavaScript program to create an array of key-value pair arrays from a given object.
 */

// my sol
function object_to_pairs(obj) {
    return Object.entries(obj);
}

console.log(object_to_pairs({ a: 1, b: 2 })); // Output: [['a', 1], ['b', 2]]
console.log(object_to_pairs({ a: 1, b: 2, c: 3 })); // Output: [['a', 1], ['b', 2], ['c', 3]]

// or w3resource

function object_to_pairs2(obj) {
    return Object.keys(obj).map(el => [el, obj[el]]);
}

console.log(object_to_pairs2({ a: 1, b: 2 })); // Output: [['a', 1], ['b', 2]]
console.log(object_to_pairs2({ a: 1, b: 2, c: 3 })); // Output: [['a', 1], ['b', 2], ['c', 3]]