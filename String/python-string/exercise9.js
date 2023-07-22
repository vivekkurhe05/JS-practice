/**
 * Write a Python program to remove the nth index character from a nonempty string.
 */

// my solution
function remove_char(str, pos) {
    return str.substring(0, pos) + str.substring(pos+1)
}

console.log(remove_char("Python",3))
