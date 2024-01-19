/**
 * Write a Python program to remove duplicate characters from a given string.
python exrcisalu
w3resouc
 */

// my solution
function remove_duplicate(str) {
    let newstr=""
    for(let i=0;i<str.length;i++) {
        if(!newstr.includes(str[i])) newstr+=str[i]
    }
    return newstr
}

console.log(remove_duplicate("python exercises practice solution"))
console.log(remove_duplicate("w3resource"))