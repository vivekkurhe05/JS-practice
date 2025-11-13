/**
 * Write a Java program to compare two strings lexicographically, ignoring case differences.
 * 
 * output:
 * 
 * String 1: This is exercise 1                                                                                  
String 2: This is Exercise 1                                                                                  
"This is exercise 1" is equal to "This is Exercise 1"
 */

// my sol
function isLexicographicallyEqual(str1, str2) {
    let lStr1 = str1.toLowerCase();
    let lStr2 = str2.toLowerCase();
    let val = lStr1.localeCompare(lStr2);

    if(val ===0) {
        return `${str1} is equal to ${str2}`;
    }
}

console.log(isLexicographicallyEqual("This is Exercise 1", "This is exercise 1"));