/**
 * Write a Python function that takes a list of words and return the longest word and
the length of the longest one.
Sample Output:
Longest word: Exercises
Length of the longest word: 9
 */

function longest_word(arr) {
    let max = arr[0].length;

    arr.map((el) => {
        max = Math.max(max, el.length);
    })

    return arr.filter((el) =>max === el.length)[0];
    
}

console.log(longest_word(["PHP","Exercises","Backend"]))