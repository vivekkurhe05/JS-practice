/**
 * Write a JavaScript program to get every nth element in a given array.
 */

// my sol
function every_nth(arr, nth) {
    return arr.filter(el => el%nth === 0)
}

console.log(every_nth([1, 2, 3, 4, 5, 6], 1)); // [1, 2, 3, 4, 5, 6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 2)); // [2, 4, 6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 3)); // [3, 6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 4)); // [4]