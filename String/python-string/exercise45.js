/**
 * Write a Python program to check whether a string contains all letters of the alphabet.
 */

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

