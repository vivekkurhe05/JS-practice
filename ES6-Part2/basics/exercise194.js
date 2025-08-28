/**
 * Write a JavaScript program to get a boolean determining if the passed value is an object or not.
 */

// my sol
function isObject(val) {
    return typeof val === 'object';
}

console.log(isObject([1, 2, 3, 4]));  // trur
console.log(isObject([]));             // true
console.log(isObject(['Hello!']));     // true
console.log(isObject({ a: 1 }));      // true
console.log(isObject({}));           // true
console.log(isObject(true));  // false

// w3resource sol

function isObject2(val) {
    return val === Object(val);
}

console.log(isObject2([1, 2, 3, 4]));  // trur
console.log(isObject2([]));             // true
console.log(isObject2(['Hello!']));     // true
console.log(isObject2({ a: 1 }));      // true
console.log(isObject2({}));           // true
console.log(isObject2(true));  // false