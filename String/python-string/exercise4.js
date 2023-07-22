/**
 *
Write a Python program to get a string from a given string where all occurrences
of its first char have been changed to '$', except the first char itself.
Sample String : 'restart'
Expected Result : 'resta$t'
 */

function changeAllOccurrencesOfFirstChar(str) {
    
    let updated_str = ''
    for (let i=0; i<str.length; i++) {
        if(i == 0 && str[i] === 'r') updated_str+=str[i]
        else if(str[i] === 'r' && i != 0) updated_str+='$'
        else updated_str += str[i]
    }

    return updated_str
}

console.log(changeAllOccurrencesOfFirstChar("restart"))