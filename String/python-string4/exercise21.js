/**
 * 
Write a Python function to convert a given string to all uppercase
if it contains at least 2 uppercase characters in the first 4 characters.
 */

// my sol
function to_uppercase(str) {
    let upperCaseCount=0
    let newStr = str.substr(0,4)
    let res=""
    for(let i=0;i<newStr.length;i++) {
        if(newStr[i]===newStr[i].toUpperCase()) upperCaseCount++
        if(upperCaseCount >=2) {
            res = str.toUpperCase()
        }else{
            res=str
        }
    }
    return res
}

console.log(to_uppercase('Python'))
console.log(to_uppercase('PyThon'))