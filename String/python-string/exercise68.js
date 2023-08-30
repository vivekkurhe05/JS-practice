/**
 * Write a Python program to generate two strings from a given string. For the first string,
use the characters that occur only once, and for the second,
use the characters that occur multiple times in the said string.
 */

// my solution
function generate_strings(str) {

    let uniq=""
    let obj = {}
    for(let i=0; i<str.length; i++) {
        uniq+=str.indexOf(str[[i]]) === str.lastIndexOf(str[i]) ? str[i] : ""
        let count = 0
        let index = str.indexOf(str[i])
        while(index!=-1) {
            count++
            index = str.indexOf(str[i], index+1)
            obj[str[i]] = count
        }
    }

    return uniq+Object.entries(obj).sort((a,b)=>b[1]-a[1]).filter(el=> el[1]>1).map(el=>el[0]).join("")
    
}

console.log(generate_strings("aabbcceffgh"))