/**
 * Write a Python program to remove duplicate characters from a given string.
python exrcisalu
w3resouc
 */

function remove_duplicate(str) {
    const obj = {}
    for(let chr of str) {
        if(!(chr in obj)) {
            obj[chr] = 1;
        }
    }

    return Object.keys(obj).join("")
}

console.log(remove_duplicate("python exercises practice solution"))
console.log(remove_duplicate("w3resource"))