/**
 * Write a Python program to remove duplicate characters from a given string.
python exrcisalu
w3resouc
 */

// my sol
function remove_duplicate(str) {
    let res=""
    for(let i=0;i<str.length;i++) {
        if(!res.includes(str[i])) {
            res+=str[i]
        }
    }
    return res
}

console.log(remove_duplicate("python exercises practice solution"))
console.log(remove_duplicate("w3resource"))

// or
// my sol
function remove_duplicate2(str) {
    let obj= {}
    let res = ""
    for(let i=0;i<str.length;i++) {
        obj[str[i]] = true
    }
    for(let key in obj) {
        res+=key
    }
    return res
}

console.log(remove_duplicate2("python exercises practice solution"))
console.log(remove_duplicate2("w3resource"))