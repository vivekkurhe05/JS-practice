/**
 * Write a Python program to count and display vowels in text.
 */

// my sol
function count_and_display_vowels(str) {
    const re = /[aeiou]/g
    return str.match(re).length
    
}

console.log(count_and_display_vowels("welcome to w3resource.com"))