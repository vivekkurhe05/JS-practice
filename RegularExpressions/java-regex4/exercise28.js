/**
 * Write a Java program to reverse the words of length higher than 3 in a given string.
 */

// my solution
function validate(str) {
  const re =/[a-z]{4,}/gi
  return str.replace(re, (word) => {
    return Array.from(word).reverse().join("")
  })
}

console.log(
    validate("Add a dash before and after every vowel in the said string:")
  );
  console.log(validate("The quick brown fox jumps over the lazy dog."));