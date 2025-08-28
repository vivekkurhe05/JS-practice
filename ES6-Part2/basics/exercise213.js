/**
 * Write a JavaScript program to initialize and fill an array with the specified values.
 */

// my sol
function initializeArrayWithValues(len, val) {
    let arr = new Array(len);
    return arr.fill(val, 0, arr.length);
}

console.log(initializeArrayWithValues(5, 2));
console.log(initializeArrayWithValues(4, 0));