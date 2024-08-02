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
function caesar_encrypt(str, left_shift) {
    let arr  = str.trim().split("")
    let newarr = []

    for(let i=0; i<arr.length; i++) {
        if(arr[i].charCodeAt()-left_shift < 97) {
            arr[i] = arr[i].charCodeAt()+23
        }else {
            arr[i] = arr[i].charCodeAt()-left_shift
        }
        newarr.push(arr[i])
    }
    return newarr.map(num => String.fromCharCode(num)).join("")
    
}

console.log(caesar_encrypt('abc', 3)) // xyz
console.log(caesar_encrypt('xyz', 3)) // uvw
console.log(caesar_encrypt('def', 3)) // abc
console.log(caesar_encrypt('pqr', 3)) // mno

// or practice 

function caesar_encrypt2(str, shift_left){
    let arr = str.trim().split("")
    let result = []
    for(let i=0;i<arr.length;i++) {
        let unicode_val=arr[i].charCodeAt()
        let resulting_char = unicode_val-shift_left
        if(resulting_char < 97) {
            arr[i]=unicode_val+23
        }else{
            arr[i]=resulting_char
        }
        result.push(arr[i])
    }
    return result.map(el=>String.fromCharCode(el)).join("")
}


console.log(caesar_encrypt2('abc', 3)) // xyz
console.log(caesar_encrypt2('xyz', 3)) // uvw
console.log(caesar_encrypt2('def', 3)) // abc
console.log(caesar_encrypt2('pqr', 3)) // mno