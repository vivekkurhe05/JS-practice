/**
 * How to create half of the string in uppercase and the other half in lowercase?
 */

// my solution
function half_str(str) {
    let num = Math.floor(str.length/2)
    return str.slice(0,num).toUpperCase() + str.slice(num)
}

console.log(half_str('geeksforgeeks'));
console.log(half_str('mahindra'));