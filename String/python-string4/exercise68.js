/**
 * Write a Python program to generate two strings from a given string. For the first string,
use the characters that occur only once, and for the second,
use the characters that occur multiple times in the said string.
 */

// my sol
function generate_strings2(str) {
    let once="", said=""
    for(let i=0;i<str.length;i++) {
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            once+=str[i]
        }else{
            said+=str[i]
        }
    }
    return once+Array.from(new Set(said)).join("")
}


console.log(generate_strings2("aabbcceffgh"))