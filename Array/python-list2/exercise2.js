/**
 * Write a Python program to multiply all the items in a list.
 */

// my solution
// O(n)
function multiply_list(arr) {
    return arr.reduce((acc,cv) => acc*cv)
}

console.log(multiply_list([1,2,-8]))