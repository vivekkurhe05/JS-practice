/**
 * Write a Python program to extract numbers from a given string.
Sample Output:
Original string: red 12 black 45 green
Extract numbers from the said string: [12, 45]
 */

function extract_numbers(str) {
    return str.match(/[0-9]+/g);
}

console.log(extract_numbers("red 12 black 45 green"))