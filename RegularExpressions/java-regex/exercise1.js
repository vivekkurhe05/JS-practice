/**
 * Write a Java program to check whether a string contains
 * only a certain set of characters (in this case a-z, A-Z and 0-9).
 */

// my solution
function validate(str) {
    const re = /^[a-zA-Z0-9]+$/;
    return re.test(str);
}

console.log(validate("ABCDEFabcdef123450")); // true
console.log(validate("SQL")); // true
console.log(validate("Java")); // true
console.log(validate("*&%@#!}{")); // false
console.log(validate("w3resource.com")); // false