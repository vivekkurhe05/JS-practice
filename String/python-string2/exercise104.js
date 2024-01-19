/**
 * Write a Python program that capitalizes the first letter and lowercases the
remaining letters in a given string.
Sample Data:
("Red Green WHITE") -> "Red Green White"
("w3resource") -> "W3resource"
("dow jones industrial average") -> "Dow Jones Industrial Average"
 */

// my solution
function capitalize(str) {
    let arr = str.trim().split(" ")
    return arr.map(el => el.at(0).toLocaleUpperCase() + el.substring(1).toLocaleLowerCase()).join(" ")
}

console.log(capitalize("Red Green WHITE"))
console.log(capitalize("w3resource"))
console.log(capitalize("dow jones industrial average"))