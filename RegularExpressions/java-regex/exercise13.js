/**
 * Write a Java program to find the word Python in a given string, if the word Python present in the string return JavaScript otherwise return C++. Ignore case sensitive.
 */

// my solution
function validate(str) {
    const re = /python/gi
    return str.search(re) != -1 ? str.replace(re, "JavaScript") : "C++"
}

let text = "python";
console.log("Original string: "+text);
console.log("New string: "+validate(text));
text = "JavaScript";
console.log("\nOriginal string: "+text);
console.log("New string: "+validate(text));
text = "PYTHON";
console.log("\nOriginal string: "+text);
console.log("New string: "+validate(text));