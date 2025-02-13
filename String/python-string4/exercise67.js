/**
 * Write a Python program to remove all consecutive duplicates of a given string.
 */

function remove_all_consecutives(str) {

    let res=""
    for(let i=0;i<str.length;i++) {
        if(!res.includes(str[i])&&str[i] === str[i+1]) {
            res+=str[i]
        }
    }
    return res
}

console.log(remove_all_consecutives("xxxxxyyyyyx")) // xyx