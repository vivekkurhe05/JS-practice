/**
 * Write a Java program to match a string that contains only
 * upper and lowercase letters, numbers, and underscores.
 */

// my solution
function validate(str) {
    const re = /^\w+$/gi
    return re.test(str)
}

console.log(validate("The quick brown fox jumps over the lazy dog.")); // false
console.log(validate("Java_Exercises_1")); // true
console.log(validate("Java_Exercises_11.0")); // false
console.log(validate("w3r")); // true