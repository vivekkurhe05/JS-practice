/**
 * Write a Python function to reverse a string if its length is a multiple of 4.
 */

// my solution
function reverse_string(str) {
    if(str.length % 4 === 0) return str.split("").reverse().join("")
    else return str
}

console.log(reverse_string('abcd'))
console.log(reverse_string('python'))