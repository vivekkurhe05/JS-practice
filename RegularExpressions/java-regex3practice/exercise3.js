/**
 * Write a Java program to find sequences of lowercase letters joined with a underscore.
 */

// my solution
function validate(str) {
    const re = /^[a-z]+\_[a-z]+$/g
    return re.test(str)
}

console.log(validate("java_exercises")); // true
console.log(validate("Java_exercises")); // false
console.log(validate("java_Exercises")); // false
console.log(validate("Java_Exercises")); // false