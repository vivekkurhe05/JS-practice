/**
 * Write a Python program to remove duplicate characters from a given string.
python exrcisalu
w3resouc
 */

function remove_duplicate(str) {
    let newStr = ""
    for(let i=0;i<str.length;i++) {
        if(!newStr.includes(str[i])) {
            newStr+=str[i]
        }
    }
    return newStr
}

console.log(remove_duplicate("python exercises practice solution"))
console.log(remove_duplicate("w3resource"))