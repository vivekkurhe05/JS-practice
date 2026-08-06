/**
 * Write a Python program to swap commas and dots in a string.
 */

let amount = "32.054,23"
const re = /[.,]/g;
console.log(amount.replace(re, (chr) => {
    const obj = {
        ".": ",",
        ",": "."
    };

    return obj[chr] || chr;
}))

