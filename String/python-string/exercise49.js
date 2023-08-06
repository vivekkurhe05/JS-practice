/**
 * Write a Python program to count and display vowels in text.
 */

// my solution
function count_and_display_vowels(str) {
    let vowels = "aeiouAEIOU"
    let arr = []
    let count = 0
    for (let i=0; i<str.length; i++) {
        if(vowels.includes(str[i])) {
            count++
            arr.push(str[i])
        }
    }

    return {
        "vowels": arr,
        "count": count
    }

}
console.log(count_and_display_vowels("welcome to w3resource.com"))