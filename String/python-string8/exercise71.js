/**
 * Write a Python program to move all spaces to the front of a given string in a single traversal.
 */

function move_spaces(str) {
let arr = Array.from(str);
let spaces = arr.filter(chr => new RegExp('\\s+','g').test(chr));
let chars = arr.filter(chr => new RegExp('\\w+','g').test(chr))

return spaces[0]+chars.join("")

}

console.log(move_spaces("Python Exercises"))