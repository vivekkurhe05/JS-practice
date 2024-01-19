/**
 *
Write a Python program to get a string from a given string where all occurrences
of its first char have been changed to '$', except the first char itself.
Sample String : 'restart'
Expected Result : 'resta$t'
 */

// my solution
function changeAllOccurrencesOfFirstChar(str) {
    let re = new RegExp(`\\B${str.charAt(0)}`,'g')
    return str.replace(re,"$")
}

console.log(changeAllOccurrencesOfFirstChar("restart"))