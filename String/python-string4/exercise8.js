/**
 * Write a Python function that takes a list of words and return the longest word and
the length of the longest one.
Sample Output:
Longest word: Exercises
Length of the longest word: 9
 */

// my sol
function longest_word(arr) {
    let max = arr[0].length
    arr.map(el => {
        max= Math.max(max, el.length)
    })

    arr = arr.filter(el => {
        return max === el.length
    })
    
    return {word: arr[0], length: arr[0].length}
}

console.log(longest_word(["PHP","Exercises","Backend", "sdfjdsfdhshhfsh"]))
