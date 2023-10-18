/**
 * Write a Python program to convert a list of multiple integers into a single integer.
Sample list: [11, 33, 50]
Expected Output: 113350
 */

// my solution
function single_integer(arr) {
    let re = /,/g
    return arr.join().replace(re, "")
}

console.log(single_integer([11, 33, 50]))