/**
 * Write a Python function to get a string made of the first three characters of a specified string.
If the length of the string is less than 3, return the original string.
Sample function and result :
first_three('ipy') -> ipy
first_three('python') -> pyt
 */

// my sol
function first_three(str) {
    if(str.length<3) return str
    else return str.substr(0,3)
}

console.log(first_three('ipy'))
console.log(first_three('python'))