/**
 * Write a Python program to generate two strings from a given string. For the first string,
use the characters that occur only once, and for the second,
use the characters that occur multiple times in the said string.
 */

// my solution
function generate_strings(str){
    let str1 = ""
    let str2 = ""

    for(let i=0;i<str.length; i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) str1+=str[i]
        if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])) if(!str2.includes(str[i])) str2+=str[i]
    }
    return {
        "str1": str1,
        "str2": str2
    }
}

console.log(generate_strings("aabbcceffgh"))