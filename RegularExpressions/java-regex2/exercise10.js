/**
 * Write a Java program to remove leading zeros from a given IP address
 */

// my solution
function validate(str){
    const re = /\b0+(?=[1-9])/g
    return str.replace(re, "")
}

console.log(validate("216.08.094.196")); // 216.8.94.196
console.log(validate("08.008.0008.00008")); // 8.8.8.8
console.log(validate("01.102.103.104")); // 1.102.103.104