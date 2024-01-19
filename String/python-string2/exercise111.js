/**
 * Write a Python program that takes a string and replaces all the characters with their respective numbers.
Sample Data:
("Python") -> "16 25 20 8 15 14"
("Java") -> "10 1 22 1"
("Python Tutorial") -> "16 25 20 8 15 14 20 21 20 15 18 9 1 12"
 */

// my solution
function replace_by_num(str) {
    let arr = []
    let chars = "abcdefghijklmnopqrstuvwxyz"
    str = str.toLowerCase()
    for(let i=0; i<str.length; i++) {
        if(chars.indexOf(str[i]) != -1) arr.push(chars.indexOf(str[i])+1)
    }
    return arr.toString()
}

console.log(replace_by_num("Python"))
console.log(replace_by_num("Java"))
console.log(replace_by_num("Python Tutorial"))