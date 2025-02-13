/**
 * Write a Python program to lowercase the first n characters in a string.
 */

function lowercase_first_n_chars(str, n) {
    return str.substr(0,n)
}

let str1 = 'W3RESOURCE.COM'
console.log(lowercase_first_n_chars(str1, 4))