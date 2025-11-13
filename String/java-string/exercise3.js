/**
 * Write a Java program to get the character (Unicode code point) before the specified 
 * index within the string.
 * 
 * output:
 * Original String : w3resource.com                                                                              
Character(unicode point) = 119                                                                                
Character(unicode point) = 99
 */

// my sol
function getUnicodeValOfCharBeforeIndex(str, i) {
    i = i-1;
    return str.charCodeAt(i);
}

console.log(getUnicodeValOfCharBeforeIndex("w3resource.com", 1));
console.log(getUnicodeValOfCharBeforeIndex("w3resource.com", 9));