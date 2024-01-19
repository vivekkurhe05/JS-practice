/**
 * Write a Python program to remove all consecutive duplicates of a given string.
 */

// my solution
function remove_all_consecutives(str) {
    let newstr = ""
    for (let i=0; i<str.length; i++){
        if(!newstr.includes(str[i]) || str[i]!=str[i-1]) newstr+=str[i]
    }

    return newstr
}

console.log(remove_all_consecutives("xxxxxyyyyyx"))