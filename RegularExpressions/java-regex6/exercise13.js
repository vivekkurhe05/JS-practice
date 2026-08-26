/**
 * Write a Java program to find the word Python in a given string, if the word Python present 
 * in the string return JavaScript otherwise return C++. Ignore case sensitive.
 */

function validate(str) {
    str = str.toLowerCase();
    if(str.search(new RegExp('Python','gi')) !== -1) {
        return "JavaScript";
    }

    return "C++";
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