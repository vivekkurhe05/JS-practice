/**
 * Write a Python program to find the common values that appear in two given strings.
Sample Output:
Original strings:
Python3
Python2.7
Intersection of two said String:
Python
 */

// my solution
function common_values(str1, str2) {
    let arr1 = str1.trim().split("")
    let arr2 = str2.trim().split("")
    return arr1.filter(el => arr2.includes(el)).join("")
}

console.log(common_values("Python3", "Python2.7"))