/**
 * Write a Python program to find all adverbs and their positions in a given sentence.
Sample text : "Clearly, he has no excuse for such behavior."
 */

// my solution
let text = "Clearly, he has no excuse for such behavior slowly.";
const re = /ly/g
let matches = []
let match;

do{
    match = re.exec(text)
    if(match){
        matches.push(match)
    }
}while(match!=null)

console.log(matches)