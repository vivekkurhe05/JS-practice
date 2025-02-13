/**
 * Write a Python program to remove duplicates from a list.
 */

// my sol
function remove_duplicates(arr) {
    return Array.from(new Set(arr))
}

console.log(remove_duplicates([10,20,30,20,10,50,60,40,80,50,40]))
