/**
 * Write a Java program to count the number of decimal places in a given number.
 */

// my solution
function validate(str) {
    const re = /(?<=\.)\d{1,}/g
    if(str.match(re) === null) return 0
    else return str.match(re)[0].length
}

console.log("Original Number: 123");
console.log(validate("123")); // 0

console.log("Original Number: 123.3");
console.log(validate("123.3")); // 1

console.log("Original Number: 123.03");
console.log(validate("123.03")); // 2

console.log("Original Number: 123.223");
console.log(validate("123.223")); // 3