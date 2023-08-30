/**
 * Write a Python program to move all spaces to the front of a given string in a single traversal.
 */

// my solution
function move_spaces(str) {
    let space=""
    let chr=""
    for(let i=0; i<str.length; i++) {
        if(str[i]===" "){
            space+=str[i]
        }else {
            chr += str[i]
        }
    }

    return space+chr
}

console.log(move_spaces("Python Exercises"))