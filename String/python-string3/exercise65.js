/**
 * Write a Python program to find all the common characters in lexicographical order
from two given lower case strings. If there are no similar letters print "No common characters".
 */

// my solution
function common_chars(str1, str2) {
    return str1.trim().split("").filter(chr => str2.includes(chr))
}

console.log(common_chars("Python","PHP"))
console.log(common_chars("Java", "PHP"))