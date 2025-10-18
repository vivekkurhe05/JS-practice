/**
 * Write a Python program that capitalizes the first letter and lowercases the
remaining letters in a given string.
Sample Data:
("Red Green WHITE") -> "Red Green White"
("w3resource") -> "W3resource"
("dow jones industrial average") -> "Dow Jones Industrial Average"
 */

function capitalize(str) {
    let arr = str.split(' ');
    return arr.map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(" ");
}

console.log(capitalize("Red Green WHITE"))
console.log(capitalize("w3resource"))
console.log(capitalize("dow jones industrial average"))