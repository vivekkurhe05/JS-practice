/**
 * Write a Python program to print the following integers with zeros
to the left of the specified width.
 */

// my solution
function pad_start(input) {
    return String(input).padStart(input.toString().length*2,"0")
}
console.log(pad_start(3))
console.log(pad_start(123))


// or my solution

function pad_start2(num) {
    num = num.toString()
    let n = num.toString().length * 2
    while (num.length < n) {
        num="0"+num
    }
    return num
}
console.log(pad_start2(3))
console.log(pad_start2(123))