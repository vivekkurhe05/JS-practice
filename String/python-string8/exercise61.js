/**
 * Write a Python program to remove duplicate characters from a given string.
python exrcisalu
w3resouc
 */

function remove_duplicate(str) {
    return Array.from(new Set(Array.from(str))).join("");
}

console.log(remove_duplicate("python exercises practice solution"))
console.log(remove_duplicate("w3resource"))