/**
 * Write a Python program to search some literals strings in a string.
Sample text : 'The quick brown fox jumps over the lazy dog.'
Searched words : 'fox', 'dog', 'horse'

output:
Searching for fox in The quick brown fox jumps over the lazy dog. => Matched
Searching for dog in The quick brown fox jumps over the lazy dog. => Matched
Searching for horse in The quick brown fox jumps over the lazy dog. => Not Matched
 */

// my solution
let arr = ["fox", "dog", "horse"];
let text = "The quick brown fox jumps over the lazy dog.";

arr.forEach(el => {
    const re = new RegExp(`${el}`,'g');
    let result = `Searching for ${el} in The quick brown fox jumps over the lazy dog. => `;
    if(re.test(text)){
        console.log(result+"Matched");
    }else{
        console.log(result+"Not Matched");
    }
})