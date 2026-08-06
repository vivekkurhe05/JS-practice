/**
 * 
Write a Python function to convert a given string to all uppercase
if it contains at least 2 uppercase characters in the first 4 characters.
 */

function to_uppercase(str) {
    let trun = str.substring(0,4)
    let flag = false;
    let arr = []
    for(let chr of trun) {
        if(chr === chr.toUpperCase()) {
            arr.push(chr)
            if(arr.length >= 2)
                flag = true;
        }
    }

    if(flag) return str.toUpperCase();
}

console.log(to_uppercase('Python'))
console.log(to_uppercase('PyThon'))