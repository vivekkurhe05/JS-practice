/**
 * Write a Python program to find the first repeated word in a given string.
 */

function first_repeated_word(str) {
    let arr = str.split(" ");
    let obj = {};
    
    for(let i=0; i<arr.length; i++) {
        if(!(arr[i] in obj)) {
            obj[arr[i]] = true
        }else{
            return arr[i];
        }
    }
}

console.log(first_repeated_word("ab ca bc ab")) // ab
console.log(first_repeated_word("ab ca bc ab ca ab bc")) // ab
console.log(first_repeated_word("ab ca bc ca ab bc")) // ca
console.log(first_repeated_word("ab ca bc")) // undefined