/**
 * Write a Python program to find all the common characters in lexicographical order
from two given lower case strings. If there are no similar letters print "No common characters".
 */

// my sol
function common_chars(str1, str2) {
    let arr1 = Array.from(str1)
    let arr2 = Array.from(str2)
    return arr1.filter(char => arr2.includes(char))[0] || "No common charaters"
}

console.log(common_chars("Python","PHP"))
console.log(common_chars("Java", "PHP"))