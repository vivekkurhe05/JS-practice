/**
 * Write a Python program to get the total length of all values in a given dictionary with string values.
Original dictionary:
{'#FF0000': 'Red', '#800000': 'Maroon', '#FFFF00': 'Yellow', '#808000': 'Olive'}
Total length of all values of the said dictionary with string values:
20
 */

const obj = {'#FF0000': 'Red', '#800000': 'Maroon', '#FFFF00': 'Yellow', '#808000': 'Olive'};

let arr = Object.values(obj);

let len = arr.reduce((acc, cur) => {
    acc+=cur.length;
    return acc;
}, 0);

console.log(len);