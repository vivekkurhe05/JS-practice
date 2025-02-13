/**
 * Write a Python program to generate two strings from a given string. For the first string,
use the characters that occur only once, and for the second,
use the characters that occur multiple times in the said string.
 */

function generate_strings(str) {
    let oncemul = function(str) {
        let newStr="",mul=""
        for(let i=0;i<str.length;i++) {
            if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
                newStr+=str[i]
            }else{
                if(!mul.includes(str[i]))  mul+=str[i]
               
            }
        }
        
        return newStr+mul
    }
    return oncemul(str)
}

console.log(generate_strings("aabbcceffgh"))