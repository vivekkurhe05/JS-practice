/**
 * Write a Python program to remove duplicate characters from a given string.
python exrcisalu
w3resouc
 */

// my solution
function remove_duplicate(str) {
    let arr = []
    for(let i=0;i <str.length; i++) {
        if(!arr.includes(str[i])) arr.push(str[i])
    }

    return arr.join("")
}

console.log(remove_duplicate("python exercises practice solution"))
console.log(remove_duplicate("w3resource"))