/**
 * Write a Python function to reverse a string if its length is a multiple of 4.
 */

// my solution
function reverse_string(str){
    return str.length%4===0 ? str.split("").reverse().join("") :  str
}

console.log(reverse_string('abcd'))
console.log(reverse_string('python'))