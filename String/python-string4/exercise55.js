/**
 * Write a Python program to find the first repeated word in a given string.
 */

// my sol
function first_repeated_word(str) {
    let obj = {}
    let arr = str.split(" ")
    for(let i=0;i<arr.length;i++) {
        if(!(arr[i] in obj)){
            obj[arr[i]] = false
        }else{
            obj[arr[i]] = true
            break;
        }
    }

    for(let key in obj) {
        if(obj[key]) return key
    }
}

console.log(first_repeated_word("ab ca bc ab")) // ab
console.log(first_repeated_word("ab ca bc ab ca ab bc")) // ab
console.log(first_repeated_word("ab ca bc ca ab bc")) // ca
console.log(first_repeated_word("ab ca bc")) // undefined