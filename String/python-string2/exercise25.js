/**
 * Write a Python program to create a Caesar encryption.

Note : In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher,
Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques.
It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter
some fixed number of positions down the alphabet. For example, with a left shift of 3,
D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar,
who used it in his private correspondence.
 */

// my solution
function caesar_encrypt(str, shift_left) {
    let arr = str.trim().split("")
    let newarr = []
    for(let i=0; i<arr.length; i++) {
        if(arr[i].charCodeAt()-shift_left < 97) {
            arr[i]=arr[i].charCodeAt()+23
            newarr.push(arr[i])
        }
        else newarr.push(arr[i].charCodeAt()-shift_left)
    }
    return newarr.map(num => String.fromCharCode(num)).join("")
    
}

console.log(caesar_encrypt('abc', 3)) // xyz
console.log(caesar_encrypt('xyz', 3)) // uvw
console.log(caesar_encrypt('def', 3)) // abc
console.log(caesar_encrypt('pqr', 3)) // mno