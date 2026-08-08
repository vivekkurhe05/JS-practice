/**
 * Write a Python program to move spaces to the front of a given string.
 */

function move_Spaces_front(str) {
    let space = "", chars="";
    for(let chr of str) {
        if(chr === " ") {
            space +=" ";
        }else {
            chars+=chr;
        }
    }

    return space+chars;
}

console.log(move_Spaces_front("w3resource .  com  "))
console.log(move_Spaces_front("   w3resource.com  "))