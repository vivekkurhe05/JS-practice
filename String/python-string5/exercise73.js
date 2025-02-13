/**
 * Write a Python program to count Uppercase, Lowercase, special characters and
numeric values in a given string.
 */

function count (str) {
    let uCount=0, lCount=0, sCount=0, nCount=0
    let obj = {}
    let chars = str.split("")
    for(let char of chars) {
        if(char === char.toUpperCase() && (char > 'A' && char < 'Z')) uCount++
        else if(char === char.toLowerCase() && (char > 'a' && char < 'z')) lCount++
        else if(char >= '0' && char <= "9") nCount++
        else sCount++
    }
    obj.uCount = uCount
    obj.lCount = lCount
    obj.sCount = sCount
    obj.nCount = nCount

    return obj
}

console.log(count("@W3Resource.Com"))