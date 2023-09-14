/**
 * Write a Python program to sum all the items in a list.
 */

// my solution
function sum_list(arr) {
    let sum = 0
    return arr.reduce((acc, cv) => acc+cv,sum)
}
console.log(sum_list([1,2,-8]))