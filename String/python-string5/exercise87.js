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
    let arr1 = str1.split('')
    let arr2 = str2.split('')

    return arr1.filter((chr) => arr2.includes(chr)).join('')
}

console.log(common_values("Python3", "Python2.7"))