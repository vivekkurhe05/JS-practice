/**
 * Write a Python program to remove the nth index character from a nonempty string.
 */

function remove_char(str, index) {
    let arr = Array.prototype.slice.call(str);
    arr.splice(index,1)
    return arr.join("");
}

console.log(remove_char("Python",3))
