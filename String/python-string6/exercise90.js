/**
 * Write a Python program to remove duplicate words from a given string.
Sample Output:
Original String:
Python Exercises Practice Solution Exercises
After removing duplicate words from the said string:
Python Exercises Practice Solution
 */

function remove_duplicate_words(str) {
    let arr = str.split(' ');
    return Array.from(new Set(arr)).join(' ');
}

console.log(remove_duplicate_words("Python Exercises Practice Solution Exercises"))
