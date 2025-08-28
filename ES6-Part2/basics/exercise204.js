/**
 * Write a JavaScript program that checks if the given argument is a native Boolean element.
 */

// my sol
function isBoolean(val) {
    return val === Boolean(val);
}

console.log(isBoolean(null)); // false (null is not a boolean)
console.log(isBoolean(false)); // true (false is a boolean)