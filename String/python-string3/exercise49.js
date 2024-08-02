/**
 * Write a Python program to count and display vowels in text.
 */

// my solution
function count_and_display_vowels(str) {
    const vowels = "AEIOUaeiou"
    let chars = ""
    let count=0
    for(let i=0;i<str.length;i++){
        if(vowels.indexOf(str[i])!=-1) {
            chars+=str[i]
            count++
        }
    }
    return {vowels:chars, count:count}
}

console.log(count_and_display_vowels("welcome to w3resource.com"))


// or

function count_and_display_vowels2(str) {
    let re = /[aeiou]/gi
    return {"vowels":str.match(re).join(""), count:str.match(re).length}
}

console.log(count_and_display_vowels2("welcome to w3resource.com"))
