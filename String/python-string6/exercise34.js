/**
 * Write a Python program to print the following integers with '*' to the right of the specified width.
 */

function pad_end(num) {
    return num.toString().padEnd(num.toString().repeat(2).length, "*");
}

console.log(pad_end(3))
console.log(pad_end(123))