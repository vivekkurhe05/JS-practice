/**
 * Write a Python program to get the total length of all values in a given dictionary with string values.
Original dictionary:
{'#FF0000': 'Red', '#800000': 'Maroon', '#FFFF00': 'Yellow', '#808000': 'Olive'}
Total length of all values of the said dictionary with string values:
20
 */

// my solution
let obj = {
    '#FF0000': 'Red', 
    '#800000': 'Maroon', 
    '#FFFF00': 'Yellow', 
    '#808000': 'Olive'
}

let count = 0

for(let key in obj) {
    count+=obj[key].length
}
console.log(count)