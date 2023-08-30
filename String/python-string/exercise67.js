/**
 * Write a Python program to remove all consecutive duplicates of a given string.
 */

// my solution
function remove_all_consecutives(str) {
    let newstr = ""
    for (let i=0; i<str.length; i++){
        if(!newstr.includes(str[i])) newstr+=str[i]
    }

    return newstr
}
console.log(remove_all_consecutives("xxxxxyyyyy"))