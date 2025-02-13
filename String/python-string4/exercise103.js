/**
 * Write a Python program to replace each character of a word of length five and more with a hash character (#).
Sample Output:
Original string: Count the lowercase letters in the said list of words:
Replace words (length five or more) with hash characters in the said string:
##### the ######### ####### in the said list of ######
Original string: Python - Remove punctuations from a string:
Replace words (length five or more) with hash characters in the said string:
###### - ###### ############ from a #######
 */

// my sol
function replace_with_hash(str) {
    const re = /[A-Za-z\:]{5,}/g
    return str.replace(re,function(word) {
        let arr = word.split("")
        return arr.map(chr => "#").join("")
    })
}

console.log(replace_with_hash("Count the lowercase letters in the said list of words:"))
console.log(replace_with_hash("Python - Remove punctuations from a string:"))