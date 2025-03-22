/**
 * Write a Java program to remove the specific letters from a string and return the new string. 
 * Specific letters: "p", "q", or "r".

If the given string does not contain "p", "q", or "r", return “Not found.”
 */

function validate(str) {
    const re = /[pqr]/g;
    return re.test(str) ? str.replace(re,"") : "Not found";
}

console.log(validate("The quick brown fox jumps over the lazy dog."));
console.log(validate("Java Exercises."));
console.log(validate("Java linkedlist."));