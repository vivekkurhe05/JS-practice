/**
 * Write a Python program to count and display vowels in text.
 */

// my solution
function count_and_display_vowels(str) {
    let re = /[aeiou]/gi
    return {"vowels":str.match(re).join(""), count:str.match(re).length}
}

console.log(count_and_display_vowels("welcome to w3resource.com"))