/**
 * Write a JavaScript program to get all the elements of an array except the last one.
 */

// my sol
function initial(arr) {
    return arr.slice(0, -1)
}

console.log(initial([1, 2, 3]));  
console.log(initial([0, -1, -2]));