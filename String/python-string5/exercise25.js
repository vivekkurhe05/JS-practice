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
function caesar_encrypt(str, shift) {
    let newStr = ""
    for(let i=0;i<str.length;i++) {
        let unicode = str[i].charCodeAt() - shift
        if(unicode < 97) {
            unicode+=26
        }
        newStr += String.fromCharCode(unicode)
    }
    return newStr
}

console.log(caesar_encrypt('abc', 3)) // xyz
console.log(caesar_encrypt('xyz', 3)) // uvw
console.log(caesar_encrypt('def', 3)) // abc
console.log(caesar_encrypt('ABC', 3)) // XYZ