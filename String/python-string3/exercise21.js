/**
 * 
Write a Python function to convert a given string to all uppercase
if it contains at least 2 uppercase characters in the first 4 characters.
 */

// my solution
function to_uppercase(str){
    let four_chars = str.substring(0,4)
    let count = 0
    for(let i=0;i<four_chars.length;i++){
        if(four_chars[i]=== four_chars[i].toUpperCase()) count++
    }
    if(count==2) {
        return str.toUpperCase()
    }
    return str
}

console.log(to_uppercase('Python'))
console.log(to_uppercase('PyThon'))