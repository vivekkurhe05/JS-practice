/**
 * Write a Python program to remove duplicate words from a given string.
Sample Output:
Original String:
Python Exercises Practice Solution Exercises
After removing duplicate words from the said string:
Python Exercises Practice Solution
 */

// my sol
function remove_duplicate_words(str) {
    let arr = str.split(" ")
    let neArr = []
    for(let i=0;i<arr.length;i++) {
        if(!neArr.includes(arr[i])) neArr[i] = arr[i]
    }

    return neArr.join(" ")
}

console.log(remove_duplicate_words("Python Exercises Practice Solution Exercises"))
