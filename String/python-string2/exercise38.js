/**
 * Write a Python program to count occurrences of a substring in a string.
 */

function count_occurrences(substr) {
    let str = "the quick brown fox jumps over the lazy dog"
    let count = 0
    let index = str.indexOf(substr)
    while(index != -1) {
        count++
        index = str.indexOf(substr, index+1)
    }

    return count
}

console.log(count_occurrences("fox"))