/**
 * Write a Java program to remove the specific letters from a string and return the new string. 
 * Specific letters: "p", "q", or "r".

If the given string does not contain "p", "q", or "r", return “Not found.”
 */

// my solution
function validate(str) {
    const re = /[pqr]/g;
    if(str.search(re) != -1) return str.replace(re, "")
    else return "Not found"
}

console.log(validate("The quick brown fox jumps over the lazy dog."));
console.log(validate("Java Exercises."));
console.log(validate("Java linkedlist."));

// or

function validate2(str) {
    const re = /[pqr]/g;
    return re.test(str) ? str.replace(re,"") : "Not found";
}

console.log(validate2("The quick brown fox jumps over the lazy dog."));
console.log(validate2("Java Exercises."));
console.log(validate2("Java linkedlist."));