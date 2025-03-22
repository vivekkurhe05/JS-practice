/**
 * Write a Java program to check for a number at the end of a given string.
 */

function validate(str) {
    const re = /^\w+[0-9]$/g;
    return re.test(str);
}

console.log(validate("abcdef")); // false
console.log(validate("3abcdef")); // false
console.log(validate("abcdef9")); // true
console.log(validate("abcdef3459")); // true