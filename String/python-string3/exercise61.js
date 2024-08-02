/**
 * Write a Python program to remove duplicate characters from a given string.
python exrcisalu
w3resouc
 */

// my solution
function remove_duplicate(str) {

    let uniqueStr = ""
    for(let i=0;i<str.length;i++){
        if(!uniqueStr.includes(str[i])) uniqueStr+=str[i]
    }
    return uniqueStr
}

console.log(remove_duplicate("python exercises practice solution"))
console.log(remove_duplicate("w3resource"))