/**
 * Write a Python program to generate two strings from a given string. For the first string,
use the characters that occur only once, and for the second,
use the characters that occur multiple times in the said string.
 */

function generate_strings(str) {
    let unique="", duplicates="";
    for(let chr of str) {
        if(str.indexOf(chr) === str.lastIndexOf(chr)) {
            unique+=chr;
        }else{
            duplicates+=chr;
        }
    }
    return [unique, Array.from(new Set(duplicates)).join("")];
}

console.log(generate_strings("aabbcceffgh"))