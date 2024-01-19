/**
 * Write a Python program to print the following integers with '*' to the right of the specified width.
 */

// my solution
function pad_end(input) {
    return input.toString().padEnd(input.toString().length*2, "*")
}

console.log(pad_end(3))
console.log(pad_end(123))