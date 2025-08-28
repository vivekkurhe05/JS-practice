/**
 * Write a JavaScript program that converts float-point arithmetic to decimal form, 
 * and creates a comma separated string from a number.
 */

// w3resource sol
function toDecimalMark(num) {
    return num.toLocaleString("en-US");
}

console.log(toDecimalMark(12305030388.9087)); // Output: "12,305,030,388.909"
console.log(toDecimalMark(123.2264)); // Output: "123.226"
console.log(toDecimalMark(-100.10)); // Output: "-100.1"