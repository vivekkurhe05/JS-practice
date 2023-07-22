/**
 * Write a Python program to create a Caesar encryption.

Note : In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher,
Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques.
It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter
some fixed number of positions down the alphabet. For example, with a left shift of 3,
D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar,
who used it in his private correspondence.
 */

// work on this
function caesar_encrypt(str, shift){
    let arr = str.split("")
    let new_arr = []

    for(let i=0;i<arr.length;i++) {
        if(arr[i] === "z") new_arr.push(arr[i].charCodeAt() - 25)
        else new_arr.push(arr[i].charCodeAt()+shift)
    }
    return new_arr.map(el => String.fromCharCode(el)).join("")
}

console.log(caesar_encrypt('abc', 3))
console.log(caesar_encrypt('xyz', 3))