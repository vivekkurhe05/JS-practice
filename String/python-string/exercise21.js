/**
 * 
Write a Python function to convert a given string to all uppercase
if it contains at least 2 uppercase characters in the first 4 characters.
 */

// my solution
function to_uppercase(str) {
    let arr = str.split("")
    let count = 0
    for (let i=0;i<arr.length;i++) {
        if(arr[i] === arr[i].toUpperCase()) count++
    }
    if(count >=2) str=str.toLocaleUpperCase()

    return str
}

console.log(to_uppercase('Python'))
console.log(to_uppercase('PyThon'))

// or my solution

function to_uppercase2(str) {
    let arr = str.split("")
    let count = 0
    for (let i=0;i<arr.length;i++) {
        if('A'<=str[i] && str[i]<="Z") count++
    }
    if(count >=2) str=str.toLocaleUpperCase()

    return str
}

console.log(to_uppercase2('Python'))
console.log(to_uppercase2('PyThon'))