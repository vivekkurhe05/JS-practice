/**
 * Write a Python program to print the following integers with '*' to the right of the specified width.
 */

// my solution
function pad_end(num) {
    num = String(num)
    let n = num.length * 2

    while (num.length < n) {
        num=num+"*"
    }
    return num
}
console.log(pad_end(3))
console.log(pad_end(123))

// or my solution

function pad_end2(num) {
    num = String(num)
    let n = num.length * 2
    return num.padEnd(n, "*")

}
console.log(pad_end2(3))
console.log(pad_end2(123))