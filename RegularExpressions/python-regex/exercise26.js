/**
 * Write a Python program to match if two words from a list of words starting with letter 'P'.
 */

// my solution

function match_words(arr) {
    const re = /\bP\w*\s\bP/g;
    return arr.filter(function(el) {
        return el.search(re) != -1;
    })
}

let words = ["Python PHP", "Java JavaScript", "c c++", "Python Java"];
console.log(match_words(words));