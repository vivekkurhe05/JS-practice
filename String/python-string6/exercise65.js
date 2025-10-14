/**
 * Write a Python program to find all the common characters in lexicographical order
from two given lower case strings. If there are no similar letters print "No common characters".
 */

function common_chars(str1, str2) {
    let arr1 = Array.from(str1);
    let arr2 = Array.from(str2);

    let commonChars = arr1.filter(el => arr2.includes(el))
    if(commonChars.length > 0) return commonChars;
    else return "No common characters";
}

console.log(common_chars("Python","PHP"))
console.log(common_chars("Java", "PHP"))