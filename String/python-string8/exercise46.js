/**
 * Write a Python program to convert a given string into a list of words.
Sample Output:
['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
 */

let str1="The quick brown fox jumps over the lazy dog";
console.log(str1.split(" "));

// or

let str2="The quick brown fox jumps over the lazy dog";
const re = /\w+/g;
console.log(str2.match(re));
