/**
 * Write a Python program to extract numbers from a given string.
Sample Output:
Original string: red 12 black 45 green
Extract numbers from the said string: [12, 45]
 */

// my sol
function extract_numbers(str) {
    const re = /\d+/g
    return str.match(re).map(num => Number(num))
}

console.log(extract_numbers("red 12 black 45 green"))