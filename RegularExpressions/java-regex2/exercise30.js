/**
 * Write a Java program to insert a dash (-) between an upper case
 * letter and a lower case letter in a given string.
 */

// my solution
function validate(str){
    const re = /[A-Z]/g
    return str.replace(re, (chr) => chr + "-")
}

console.log(validate("Python Exercises")); // P-ython E-xercises
console.log(validate("The quick brown Fox jumps over the lazy Dog.")); // T-he quick brown F-ox jumps over the lazy D-og.
console.log(validate("java exercises")); // java exercises