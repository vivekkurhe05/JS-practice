/**
 * Write a Python program to find common items in two lists.
 * 
 * color1 = ["Red", "Green", "Orange", "White"]
color2 = ["Black", "Green", "White", "Pink"]
 */

// my solution
function common(arr1, arr2) {
    return arr1.filter(el => arr2.includes(el))
}

let color1 = ["Red", "Green", "Orange", "White"]
let color2 = ["Black", "Green", "White", "Pink"]

console.log(common(color1, color2))