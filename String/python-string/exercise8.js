/**
 * Write a Python function that takes a list of words and return the longest word and
the length of the longest one.
Sample Output:
Longest word: Exercises
Length of the longest word: 9
 */

// my solution
function longest_word(arr) {
    
    let longest_word = arr.sort((a,b)=> a.length - b.length)[arr.length-1]
    let len = longest_word.length

    return [longest_word, len]
}
console.log(longest_word(["PHP","Exercises","Backend"]))