/**
 * Write a Python program to check whether a string contains all letters of the alphabet.
 */

function all_alphabets(str){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    str = str.toLowerCase()
    str =str.replaceAll(" ","")
    return alpha.split("").every(char=>str.indexOf(char)!=-1)

}

console.log(all_alphabets("The quick brown fox jumps over the lazy dog")) // true
console.log(all_alphabets("The quick brown fox jumps over the lazy cat")) // false

// or practice

function all_alphabets2(str){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    str = str.toLowerCase()
    str = str.replaceAll(" ","")
    let flag = true
    for(let i=0; i<alpha.length;i++) {
        if(str.indexOf(alpha[i])===-1) {
            flag = false
            return flag
        }
    }
    return flag
}

console.log(all_alphabets2("The quick brown fox jumps over the lazy dog")) // true
console.log(all_alphabets2("The quick brown fox jumps over the lazy cat")) // false