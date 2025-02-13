/**
 * Write a Python function that takes a list of words and return the longest word and
the length of the longest one.
Sample Output:
Longest word: Exercises
Length of the longest word: 9
 */

// my solution
function longest_word(arr) {
    
    let max = arr[0].length
    arr.map((el) => {
        max = Math.max(el.length, max)
        return max
    })

    let el= arr.filter((el) => {
        return el.length===max
    })

    return [el[0], max]
   
}
console.log(longest_word(["PHP","Exercises","Backend"]))