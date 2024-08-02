/**
 *
Write a Python program to get a string from a given string where all occurrences
of its first char have been changed to '$', except the first char itself.
Sample String : 'restart'
Expected Result : 'resta$t'
 */


// my solution
function changeAllOccurrencesOfFirstChar(str){
    let re = /\Br/g
    return str.replace(re, "$")
}

console.log(changeAllOccurrencesOfFirstChar("restart"))


// or my solution

function changeAllOccurrencesOfFirstChar2(str){
    return Array.from(str).map((chr,i) => {
        if(chr === "r" && i!=0) return "$"
        else return chr
    }).join("")
}

console.log(changeAllOccurrencesOfFirstChar2("restart"))