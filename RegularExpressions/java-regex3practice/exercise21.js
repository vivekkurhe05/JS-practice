/**
 * Write a Java program to remove all non-alphanumeric characters from a given string.
 */

// my solution
function validate(str) {
    const re = /[^a-z0-9]/gi
    return str.replace(re,"")
}

console.log(validate("Java Exercises")); // JavaExercises
console.log(validate("Ex@^%&%(ercis*&)&es")); // Exercises