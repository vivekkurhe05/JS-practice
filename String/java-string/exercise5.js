/**
 * Write a Java program to compare two strings lexicographically.
Two strings are lexicographically equal if they are the same length and 
contain the same characters in the same positions.

output
String 1: This is Exercise 1                                                                                  
String 2: This is Exercise 2                                                                                  
"This is Exercise 1" is less than "This is Exercise 2" 
 */

// my sol
function isLexicographicallyEqual(str1, str2) {
    let val = str1.localeCompare(str2);
    if(val < 0) {
        return `${str1} is less than ${str2}`;
    }
}

console.log(isLexicographicallyEqual("This is Exercise 1", "This is Exercise 2"));