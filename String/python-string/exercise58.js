/**
 * Write a Python program to move spaces to the front of a given string.
 */

// my solution
function move_Spaces_front(str) {
    let space = "", chr=""
    for(let i=0; i<str.length; i++) {
        if(str[i]== " ") space+=" "
        else chr+=str[i]
    }
    return space+chr
}

console.log(move_Spaces_front("w3resource .  com  "))
console.log(move_Spaces_front("   w3resource.com  "))