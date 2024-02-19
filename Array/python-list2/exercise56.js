/**
 * Write a Python program to convert a string to a list.
 */

// do it again
function convert_into_array(str) {
    let regex = /[\[\],'']/g;
    str = str.replace(regex,"")
    return str.split(" ")
}

let color ="['Red', 'Green', 'White']"
console.log(convert_into_array(color))