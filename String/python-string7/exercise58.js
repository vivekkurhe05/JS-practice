/**
 * Write a Python program to move spaces to the front of a given string.
 */

function move_Spaces_front(str) {
    let movedSpaces = "";
    let chars="";
    for(let chr of str) {
        if(chr === " ") movedSpaces+=" ";
        else{
            chars+=chr;
        }
    }

    return movedSpaces+chars;
}

console.log(move_Spaces_front("w3resource .  com  "))
console.log(move_Spaces_front("   w3resource.com  "))