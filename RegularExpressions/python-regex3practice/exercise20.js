/**
 * Write a Python program to search a literals string in a string and also find the location within the original string 
 * where the pattern occurs.

Sample text : 'The quick brown fox jumps over the lazy dog.'
Searched words : 'fox'
 */


// my solution
let text = "The quick brown fox jumps over the lazy dog.";
const re = /fox/g
let matches = []
let match

do{
    match = re.exec(text)
    if(match){
        matches.push(match)
    }
}while(match!=null)

console.log(matches[0].index)