/**
 * Write a Python program to sum all the items in a list.
 */

// my solution Big O is O(n)
function sum_list(arr) {
    return arr.reduce((acc,cv) => acc+cv)
}

console.log(sum_list([1,2,-8]))