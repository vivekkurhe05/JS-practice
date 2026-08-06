/**
 * Write a Python function to reverse a string if its length is a multiple of 4.
 */

function reverse_string(str) {

    if(str.length%4===0) {
        return Array.from(str).reverse().join("");
    }
}

console.log(reverse_string('abcd'))
console.log(reverse_string('python'))