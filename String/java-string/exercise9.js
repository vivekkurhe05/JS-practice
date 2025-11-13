/**
 * Write a Java program to compare a given string to the specified character sequence.
 * 
 * output:
 * Comparing example.com and example.com: true                                                                   
Comparing Example.com and example.com: false
 */

function compareStrings(str1, str2) {
    return str1 === str2;
}

console.log(compareStrings("example.com","example.com"));
console.log(compareStrings("Example.com","example.com"));