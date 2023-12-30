/**
 * How to get a number of vowels in a string in JavaScript?
 */

// my solution
function count_vowels2(str) {

    let vowels = "AEIOUaeiou", count=0;
    for(let i=0; i<str.length; i++) {
        if(vowels.indexOf(str[i]) != -1) {
            count++
        }
    }

    return count
}

console.log(count_vowels2("geeksforgeeks"));
console.log(count_vowels2('Hello Geeks'));