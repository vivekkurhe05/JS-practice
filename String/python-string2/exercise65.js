/**
 * Write a Python program to find all the common characters in lexicographical order
from two given lower case strings. If there are no similar letters print "No common characters".
 */

// my solution
function common_chars(str1, str2) {
    let arr1 = str1.trim().split("")
    let arr2 = str2.trim().split("")

    arr1 = arr1.filter(el => arr2.includes(el))
    if(arr1.length ===0) return "No common characters"
    else return arr1
}

console.log(common_chars("Python","PHP"))
console.log(common_chars("Java", "PHP"))