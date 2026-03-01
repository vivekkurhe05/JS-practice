/**
 * Write a Python program to capitalize the first and last letters of each word in a given string.
 */

function capitalize_first_last_letters(str) {
    const arr = str.split(" ");
    return arr.map(word => word[0].toUpperCase()+word.slice(1,word.length-1)+word[word.length-1].toUpperCase()).join(" ");
}

console.log(capitalize_first_last_letters("python exercises practice solution"))
console.log(capitalize_first_last_letters("w3resource"))