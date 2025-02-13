/**
 * Write a Python program to sum all the items in a list.
 */

// my sol
function sum_list(arr) {
    return arr.reduce((acc, cv) => {
        acc+=cv
        return acc
    },0)
}

console.log(sum_list([1,2,-8]))