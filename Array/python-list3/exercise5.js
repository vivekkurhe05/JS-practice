/**
 * Write a Python program to count the number of strings from a given list of strings. 
 * The string length is 2 or more and the first and last characters are the same.
Sample List : ['abc', 'xyz', 'aba', '1221']
Expected Result : 2
 */

// my sol
function match_words(arr) {
    return arr.filter(el => el.length>=2 && el[0]===el[el.length-1]).length
}

console.log(match_words(['abc', 'xyz', 'aba', '1221','viv']))