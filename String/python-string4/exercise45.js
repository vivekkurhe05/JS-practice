/**
 * Write a Python program to check whether a string contains all letters of the alphabet.
 */

// my sol
function all_alphabets(str) {
    let chars = "abcdefghijklmnopqrstuvwxyz"
    str=str.toLocaleLowerCase()
    let flag=true
    for(let i=0;i<chars.length;i++) {
        if(str.includes(chars[i])) continue
        else {
            flag = false
            break
        }
    }
    return flag
}

console.log(all_alphabets("The quick brown fox jumps over the lazy dog")) // true
console.log(all_alphabets("The quick brown fox jumps over the lazy cat")) // false

// or

// my sol
function all_alphabets2(str) {
    let chars = "abcdefghijklmnopqrstuvwxyz"
    let arr= str.split(" ").join("").toLocaleLowerCase().split("")
    return Array.from(chars).every(char => arr.includes(char))
}

console.log(all_alphabets2("The quick brown fox jumps over the lazy dog")) // true
console.log(all_alphabets2("The quick brown fox jumps over the lazy cat")) // false