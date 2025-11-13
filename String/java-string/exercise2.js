/**
 * Write a Java program to get the character (Unicode code point) at the given 
 * index within the string.
 * 
 * output:
 * Original String : w3resource.com                                                                              
Character(unicode point) = 51                                                                                 
Character(unicode point) = 101 
 */

// my sol
function getUnicodeValOfChar(str, i) {
    return str.charCodeAt(i)
}

console.log(getUnicodeValOfChar("w3resource.com", 1));
console.log(getUnicodeValOfChar("w3resource.com", 9));