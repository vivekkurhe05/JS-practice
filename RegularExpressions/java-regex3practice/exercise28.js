/**
 * Write a Java program to reverse the words of length higher than 3 in a given string.
 */

// my solution
function validate(str) {
    const re = /[\w\:\.]{4,}/g
    return str.replace(re, (word) => {
        return word.split("").reverse().join("")
    })
}

console.log(
    validate("Add a dash before and after every vowel in the said string:")
  );
  console.log(validate("The quick brown fox jumps over the lazy dog."));