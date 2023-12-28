/**
 * 
 * write a javascript function to reverse a string
 */

// my solution
function reverse_string(str) {
    let arr = str.split("")
    return arr.reverse().join("")
}

console.log(reverse_string('JavaScript'));