/**
 * Write a Python program to multiply all the items in a list.
 */

// my solution
function multiply_list(arr) {

    let mul = 1
    return arr.reduce((acc, cv) => acc*cv, mul)
}
console.log(multiply_list([1,2,-8]))