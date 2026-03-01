/**
 * Write a Python program to move all spaces to the front of a given string in a single traversal.
 */

function move_spaces(str) {
    var spaces="";
    var chars="";
    for(let i=0;i<str.length;i++) {
        if(str[i] === " ") {
            spaces+=" ";
        }else{
            chars+=str[i]
        }
    }

    return spaces+chars;

}

console.log(move_spaces("Python Exercises"))