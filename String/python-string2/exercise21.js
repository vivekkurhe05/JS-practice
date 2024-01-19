/**
 * 
Write a Python function to convert a given string to all uppercase
if it contains at least 2 uppercase characters in the first 4 characters.
 */

// my solution
function to_uppercase(str) {
    let newstr = str.slice(0,4)
    let count = 0
    for(let i=0; i<newstr.length; i++) {
        if(newstr[i] === newstr[i].toUpperCase()) count++
    }
    if(count === 2) str=str.toUpperCase()
    
    return str
}

console.log(to_uppercase('Python'))
console.log(to_uppercase('PyThon'))