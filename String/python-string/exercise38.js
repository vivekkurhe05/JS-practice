/**
 * Write a Python program to count occurrences of a substring in a string.
 */

// my solution
function count_occurrences(substr) {
    let str = "The quick brown foxes jumps over the lazy dog"
    let index = str.indexOf(substr)
    let count = 0
    while (index != -1) {
        count++
        index = str.indexOf(substr, index+1)
    }
    return count
}

console.log(count_occurrences("fox"))