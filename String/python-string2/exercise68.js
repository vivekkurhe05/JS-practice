/**
 * Write a Python program to generate two strings from a given string. For the first string,
use the characters that occur only once, and for the second,
use the characters that occur multiple times in the said string.
 */

// my solution
function generate_strings(str) {
    let unique_str = ""
    let repeated_str = ""
    for(let i=0; i<str.length; i++) {
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            unique_str+=str[i]
        }

        let count=0
        let index = str.indexOf(str[i])
        while(index!=-1){
            count++
            index=str.indexOf(str[i], index+1)
            if(count>1 && !repeated_str.includes(str[i])) repeated_str+=str[i]
        }
    }
    return unique_str+repeated_str 
}

console.log(generate_strings("aabbcceffgh"))

// or my solution

function generate_strings2(str){
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

console.log(generate_strings2("aabbcceffgh"))