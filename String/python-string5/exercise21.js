/**
 * 
Write a Python function to convert a given string to all uppercase
if it contains at least 2 uppercase characters in the first 4 characters.
 */

function to_uppercase(str) {
    let count=0
    let newStr = str.substring(0,4)
    for(let i=0;i<newStr.length;i++) {
        if(newStr[i] === newStr[i].toUpperCase()) {
            count++
        }
    }
    if(count===2) {
        return str.toUpperCase()
    }else{
        return str
    }
}

console.log(to_uppercase('Python'))
console.log(to_uppercase('PyThon'))