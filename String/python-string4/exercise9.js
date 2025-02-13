/**
 * Write a Python program to remove the nth index character from a nonempty string.
 */

// my sol
function remove_char(str, index) {
    return str.substring(0,index)+str.substring(index+1)
}

console.log(remove_char("Python",3))

// or
// my sol
function remove_char2(str, index) {
    let chars = Array.from(str)
    chars.splice(index,1)
    return chars.join("")
}

console.log(remove_char2("Python",3))