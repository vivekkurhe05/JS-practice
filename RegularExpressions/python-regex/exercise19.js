/**
 * Write a Python program to search some literals strings in a string.
Sample text : 'The quick brown fox jumps over the lazy dog.'
Searched words : 'fox', 'dog', 'horse'
 */

// my solution

let arr = ["fox", "dog", "horse"];
let text = "The quick brown fox jumps over the lazy dog.";

for(let i=0; i<arr.length; i++) {
    if(text.search(new RegExp(arr[i], 'g')) != -1) {
        console.log(`Searching for ${arr[i]} in ${text} => Matched`)
    } else {
        console.log(`Searching for ${arr[i]} in ${text} => Not Matched`)
    }
}

// or

arr.find(function(el) {
    if(text.includes(el)) {
        console.log(`Searching for ${el} in ${text} => Matched`)
    }else {
        console.log(`Searching for ${el} in ${text} => Not Matched`)   
    }
})