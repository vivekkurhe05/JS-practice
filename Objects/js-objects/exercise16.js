/**
 * Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.
 */

// my solution
let arr = [
    ["red", "#FF0000"],
    ["green", "#00FF00"],
    ["white", "#FFFFFF"],
];

arr = arr.map((sub_arr) => {
    return sub_arr.reverse()
})
let obj = Object.fromEntries(arr)
console.log(obj)