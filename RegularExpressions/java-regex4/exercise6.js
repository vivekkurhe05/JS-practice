/**
 * Write a Java program to check a word contains the character 'g' in a given string.
 */

// my solution
function validate(str) {
    const re = /\w*g\w*/g
    return re.test(str)
}

console.log(validate("The quick brown fox jumps over the lazy dog.")); // true
console.log(validate("Java Exercises.")); // false
console.log(validate("Do humans eat gizzards?")); // true
console.log(validate("gizzards?")); // true