/**
 * Write a Python program to find the first repeated word in a given string.
 */

function first_repeated_word(str) {
    const arr = str.split(" ");
    const obj = {};
    let firstRepeatedWord = "";
    for(let el of arr) {
        if(!(el in obj)) {
            obj[el] = false;
        }else {
            firstRepeatedWord = el;
            break;
        }
    }

    return firstRepeatedWord || undefined;
}

console.log(first_repeated_word("ab ca bc ab")) // ab
console.log(first_repeated_word("ab ca bc ab ca ab bc")) // ab
console.log(first_repeated_word("ab ca bc ca ab bc")) // ca
console.log(first_repeated_word("ab ca bc")) // undefined