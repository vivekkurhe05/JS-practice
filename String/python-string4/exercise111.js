/**
 * Write a Python program that takes a string and replaces all the characters with their respective numbers.
Sample Data:
("Python") -> "16 25 20 8 15 14"
("Java") -> "10 1 22 1"
("Python Tutorial") -> "16 25 20 8 15 14 20 21 20 15 18 9 1 12"
 */

// my sol
function replace_by_num(str) {
    let chars = "abcdefghijklmnopqrstuvwxyz"
    str = str.toLowerCase()
    let arr = Array.from(str)

    return arr.map(chr => {
        return chars.indexOf(chr)+1
    }).join(" ")
}
console.log(replace_by_num("Python"))
console.log(replace_by_num("Java"))
console.log(replace_by_num("Python Tutorial"))