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

// or

function convert_into_array2(str) {
    return JSON.parse(str)
}

let color2 ="['Red', 'Green', 'White']"
console.log(convert_into_array2(color2))
