/**
 * Write a Python program to find all the common characters in lexicographical order
from two given lower case strings. If there are no similar letters print "No common characters".
 */

function common_chars(str1, str2) {
    let arr1=Array.from(str1)
    let arr2=Array.from(str2)

    let commonchars= arr1.filter(chr=>arr2.includes(chr))
    if(commonchars.length>0) {
        return commonchars
    }else{
        return "No common characters"
    }
}

console.log(common_chars("Python","PHP"))
console.log(common_chars("Java", "PHP"))