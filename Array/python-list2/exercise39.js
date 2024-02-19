/**
 * Write a Python program to convert a list of multiple integers into a single integer.
Sample list: [11, 33, 50]
Expected Output: 113350
 */

function single_integer(arr) {
    let str = arr.join("")
    return parseInt(str)
}

console.log(single_integer([11, 33, 50]))