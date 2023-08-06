/**
 * Write a Python program to find the first repeated word in a given string.
 */

// my solution
function first_repeated_word(str) {

    let arr = str.split(" ")
    let obj = {}
    for(let i=0; i<arr.length; i++) {
        if(arr[i] in obj) return arr[i]
        else obj[arr[i]] = 1
    }
}
console.log(first_repeated_word("ab ca bc ab")) // ab
console.log(first_repeated_word("ab ca bc ab ca ab bc")) // ab
console.log(first_repeated_word("ab ca bc ca ab bc")) // ca
console.log(first_repeated_word("ab ca bc")) // undefined