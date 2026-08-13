/**
 * Write a Python program to find the common values that appear in two given strings.
Sample Output:
Original strings:
Python3
Python2.7
Intersection of two said String:
Python
 */

function common_values(str1, str2) {

    return str1.split("").filter(chr => str2.includes(chr)).join("");
}

console.log(common_values("Python3", "Python2.7"));