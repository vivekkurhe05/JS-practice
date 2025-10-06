/**
 * 
Write a Python function to convert a given string to all uppercase
if it contains at least 2 uppercase characters in the first 4 characters.
 */

function to_uppercase(str) {
    let countUpperCase = 0;

    let first4Chars = str.substring(0, 4);
    for(let chr of str) {
        if(chr === chr.toUpperCase()) {
            countUpperCase++;
        }
    }

    if(countUpperCase >= 2) {
        return str.toUpperCase();
    }

    return str;
}

console.log(to_uppercase('Python'))
console.log(to_uppercase('PyThon'))