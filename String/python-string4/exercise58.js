/**
 * Write a Python program to move spaces to the front of a given string.
 */

// my sol
function move_Spaces_front(str) {

    let spaces=""
    for(let i=0;i<str.length;i++) {
        if(str[i] === " ") {
            spaces+=" "
        }
    }
    return spaces+str.replace(/\s/g, "")
}


console.log(move_Spaces_front("w3resource .  com  "))
console.log(move_Spaces_front("   w3resource.com  "))