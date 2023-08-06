/**
 * Write a Python program to strip a vowels from a string.
 */

// my solution
function strip_chars(str) {

    const re = /[aeiou]/gi;
    return str.replace(re, "")
}

console.log(strip_chars("The quick brown fox jumps over the lazy dog"))

// or my solution

function strip_chars2(str) {

    let vowels = "aeiou"
    let newstr=""

    for(let i=0; i<str.length; i++) {
        if(vowels.indexOf(str[i]) !== -1) {
            continue
        }else{
            newstr+=str[i]
        }
    }

    return newstr
}

console.log(strip_chars2("The quick brown fox jumps over the lazy dog"))