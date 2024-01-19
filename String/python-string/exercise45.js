/**
 * Write a Python program to check whether a string contains all letters of the alphabet.
 */

// my solution
function all_alphabets(str) {
    str = str.toLowerCase()
    let alphabets = "abcdefghijklmnopqrstuvwxyz"
    let flag = false
    let arr = []

    for(let i=0; i<alphabets.length; i++) {
        if(str.includes(alphabets[i])) {
            arr.push(true)
        }else {
            arr.push(false)
        }
    }

    for (let i=0; i<arr.length; i++) {
        if (arr[i] == true) flag = true
        else {
            flag = false
            break
        }
    }

    return flag
}

console.log(all_alphabets("The quick brown fox jumps over the lazy dog"))
console.log(all_alphabets("The quick brown fox jumps over the lazy cat"))


// or

// my solution
function all_alphabets(str) {
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    str = str.toLowerCase()
    str = str.replaceAll(" ", "")
    return alpha.split("").every(chr => str.indexOf(chr)!=-1)
}

console.log(all_alphabets("The quick brown fox jumps over the lazy dog"))
console.log(all_alphabets("The quick brown fox jumps over the lazy cat"))
