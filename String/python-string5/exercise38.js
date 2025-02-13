/**
 * Write a Python program to count occurrences of a substring in a string.
 */

function count_occurrences(str) {
    let line = "The quick brown foxes jumps over the lazy dog"
    let arr = line.split(" ")
    let index = arr.indexOf(str)
    let count=0
    while(index != -1) {
        count++
        index = arr.indexOf(str, index+1)
    }
    return count
}

console.log(count_occurrences("foxes"))