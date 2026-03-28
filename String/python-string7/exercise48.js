/**
 * Write a Python program to swap commas and dots in a string.
 */

let amount = "32.054,23"

console.log(amount.replace(/[.,]/g, function(chr) {
    const obj = {
        ".": ",",
        ",": "."
    };

    return obj[chr] || chr;
}));