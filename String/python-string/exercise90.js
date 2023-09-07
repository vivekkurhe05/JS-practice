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
    let newstr = ""
    let arr = str.split(" ")
    for(let i=0; i<arr.length; i++) {
        if(!newstr.includes(arr[i])) newstr+=arr[i]+" "
    }

    return newstr
}

console.log(remove_duplicate_words("Python Exercises Practice Solution Exercises"))
