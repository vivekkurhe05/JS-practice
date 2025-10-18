/**
 * Write a Python program to move all spaces to the front of a given string in a single traversal.
 */

function move_spaces(str) {

    let spaces="", chars="";
    for(let chr of str) {
        if(chr === " ") {
            spaces+=chr;
        }else{
            chars+=chr;
        }
    }

    return spaces.concat(chars);
}

console.log(move_spaces("Python Exercises"))