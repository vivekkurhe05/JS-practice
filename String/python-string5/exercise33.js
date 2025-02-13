/**
 * Write a Python program to print the following integers with zeros
to the left of the specified width.
 */

function pad_start(num) {
    return num.toString().padStart(num.toString().length*2, "0")
}

console.log(pad_start(3))
console.log(pad_start(123))