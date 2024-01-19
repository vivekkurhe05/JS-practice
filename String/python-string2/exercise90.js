/**
 * Write a Python program to remove duplicate words from a given string.
Sample Output:
Original String:
Python Exercises Practice Solution Exercises
After removing duplicate words from the said string:
Python Exercises Practice Solution
 */

// my solution
function remove_duplicate_words(str) {
    let arr = str.trim().split(" ")
    let uniq = new Set(arr)
    return Array.from(uniq).join(" ")
}

console.log(remove_duplicate_words("Python Exercises Practice Solution Exercises"))
