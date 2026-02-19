/**
 * Write a Python program to print the following integers with zeros
to the left of the specified width.
 */

function pad_start(num) {
    let str = num.toString();
    return str.padStart(str.repeat(2).length, "0")
}

console.log(pad_start(3))
console.log(pad_start(123))