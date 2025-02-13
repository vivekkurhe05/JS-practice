/**
 * Write a Python program to multiply all the items in a list.
 */

// my sol
function multiply_list(arr) {
    return arr.reduce((acc, cv) => {
        acc*=cv
        return acc
    },1)
}

console.log(multiply_list([1,2,-8]))