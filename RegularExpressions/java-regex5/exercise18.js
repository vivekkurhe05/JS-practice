/**
 * Write a Java program to validate a personal identification number (PIN).
 * Assume the length of a PIN number is 4, 6 or 8.
 */

function validate(str) {
    const re = /^(\d{4}|\d{6}|\d{8})$/g;
    return re.test(str)
}

console.log(validate("123")); // false
console.log(validate("1234")); // true
console.log(validate("12345")); // false
console.log(validate("123456")); // true
console.log(validate("1234567")); // false
console.log(validate("12345678")); // true
console.log(validate("123456789")); // false