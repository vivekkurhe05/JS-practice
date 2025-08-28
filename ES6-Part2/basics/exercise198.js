/**
 * Write a JavaScript program to check whether the given argument is a function.
 */

// my sol
function isFunction(val) {
    return typeof val === 'function';
}

console.log(isFunction('x'));      // false (the value is not a function)
console.log(isFunction(x => x));   // true (the value is a function)