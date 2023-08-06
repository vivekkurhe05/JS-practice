/**
 * Write a Python program to lowercase the first n characters in a string.
 */

// my solution
let str1 = 'W3RESOURCE.COM'

function lowercase_first_n_chars(str, n) {
    return str.substring(0,n).toLowerCase() + str.substring(n)
}
console.log(lowercase_first_n_chars(str1, 4))