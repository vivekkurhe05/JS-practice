/**
 * Write a Java program to find the sequences of one upper case letter followed by lower case letters.
 */

// my solution
function validate(str) {
    const re = /^[A-Z][a-z]+$/;
    return re.test(str)
}

console.log(validate("Java")); // true
console.log(validate("java")); // false
console.log(validate("javA")); // false
console.log(validate("JAVa")); // false
console.log(validate("Ja")); // true
console.log(validate("aJ")); // false