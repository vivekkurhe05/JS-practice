/**
 * Write a Python program to print the following integers with '*' to the right of the specified width.
 */

function pad_end(num) {
    let str = num.toString();
    return str.padEnd(str.repeat(2).length, "*")
}

console.log(pad_end(3))
console.log(pad_end(123))