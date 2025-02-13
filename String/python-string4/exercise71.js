/**
 * Write a Python program to move all spaces to the front of a given string in a single traversal.
 */

// my sol
function move_spaces(str) {
    let spaces="", fstr=""
    for(let i=0;i<str.length;i++) {
        if(str[i] === " ") {
            spaces+=" "
        }else{
            fstr+=str[i]
        }
    }
    return spaces+fstr
}

console.log(move_spaces("   Python    Exercises    "))