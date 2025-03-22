/**
 * Write a Java program that takes a number and set thousands separator in that number.
 */

function validate(str) {
    const re = /\B(?=(\d{3})+(?!\d))/g;
    return str.replace(re,",");
}

console.log(validate("100"));
console.log(validate("1000"));
console.log(validate("10000"));
console.log(validate("100000"));
console.log(validate("1000000"));