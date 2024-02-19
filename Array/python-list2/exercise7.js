/**
 * Write a Python program to remove duplicates from a list.
 */

// my solution
function remove_duplicates(arr) {
    let unique_elems = new Set(arr)
    return Array.from(unique_elems)
}

console.log(remove_duplicates([10,20,30,20,10,50,60,40,80,50,40]))
