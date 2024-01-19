/**
 * Write a Python program to print the following integers with zeros
to the left of the specified width.
 */

// my solution
function pad_start(input) {
    return input.toString().padStart(input.toString().length*2, "0")
}

console.log(pad_start(3))
console.log(pad_start(123))

// my solution
function pad_start2(input) {
    
}

console.log(pad_start2(3))
console.log(pad_start2(123))