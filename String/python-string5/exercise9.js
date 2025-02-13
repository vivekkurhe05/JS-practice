/**
 * Write a Python program to remove the nth index character from a nonempty string.
 */

// my solution
function remove_char(str, pos) {
    let arr = Array.from(str)
    arr.splice(pos,1)
    return arr.join('')
    
}

console.log(remove_char("Python",3))
