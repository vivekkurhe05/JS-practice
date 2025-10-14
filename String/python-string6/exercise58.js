/**
 * Write a Python program to move spaces to the front of a given string.
 */

function move_Spaces_front(str) {
    let collectSpaces = "";
    let collectChars = "";
    for(let i=0;i<str.length;i++) {
        if(str[i] == " "){
            collectSpaces+=" ";
        }else{
            collectChars+=str[i];
        }
    }
    return collectSpaces.concat(collectChars);
}

console.log(move_Spaces_front("w3resource .  com  "))
console.log(move_Spaces_front("   w3resource.com  "))