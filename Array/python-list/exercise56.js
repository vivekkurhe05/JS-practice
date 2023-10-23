/**
 * Write a Python program to convert a string to a list.
 */

// my solution
function convert_into_array(color) {
    let re = /[\[\],'']/g
    return color.replace(re,"").split(" ")
}

let color ="['Red', 'Green', 'White']"

console.log(convert_into_array(color))
console.log(toString.call(convert_into_array(color)) === '[object Array]')