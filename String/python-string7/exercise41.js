/**
 * Write a Python program to strip a vowels from a string.
 */

function strip_chars(str) {
    const vowels = "AEIOUaeiou";
    let consonants = "";
    for(let i=0; i<str.length; i++) {
        if(vowels.includes(str[i])) {
            continue;
        }else{
            consonants+=str[i]
        }
    }

    return consonants;
}

console.log(strip_chars("The quick brown fox jumps over the lazy dog"))