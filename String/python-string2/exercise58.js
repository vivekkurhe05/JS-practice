/**
 * Write a Python program to move spaces to the front of a given string.
 */

// my solution
function move_Spaces_front(str) {
    let spaces="",newstr=""
    for(let i=0;i<str.length;i++){
        if(str[i] === " ") spaces+=" "
        else newstr+=str[i]
    }
    return spaces+newstr
}

console.log(move_Spaces_front("w3resource .  com  "))
console.log(move_Spaces_front("   w3resource.com  "))