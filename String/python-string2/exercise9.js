/**
 * Write a Python program to remove the nth index character from a nonempty string.
 */

// my solution
function remove_char(str, index) {
    return str.slice(0,index)+str.slice(index+1)
}

console.log(remove_char("Python",3))