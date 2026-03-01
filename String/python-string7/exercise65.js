/**
 * Write a Python program to find all the common characters in lexicographical order
from two given lower case strings. If there are no similar letters print "No common characters".
 */

function common_chars(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const commonchars = [];

    for(let i=0;i<str2.length;i++){
        if(str1.includes(str2[i])) commonchars.push(str2[i])
        else continue;
    }
    if(commonchars.length !== 0) {
        return commonchars.join("");
    }

    return "No common characters";

}

console.log(common_chars("Python","PHP"))
console.log(common_chars("Java", "PHP"))