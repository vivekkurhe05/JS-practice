/**
 * Write a Python program to generate two strings from a given string. For the first string,
use the characters that occur only once, and for the second,
use the characters that occur multiple times in the said string.
 */

function generate_strings(str) {
    let firstStr = "";
    let secStr = "";

    for(let i=0;i<str.length;i++) {
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            firstStr+=str[i]
        }else{
            secStr+=str[i]
        }
    }

    return [firstStr, secStr]

}

console.log(generate_strings("aabbcceffgh"))