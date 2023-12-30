/**
 * How to get the number of occurrences of each letter in specified string in JavaScript ?
 */

// my solution
function count_occurrences(str) {
    let obj = {}
    for(let i=0; i<str.length; i++) {
        if(str[i] === " ") continue
        let count = 0
        let index = str.indexOf(str[i])
        while(index != -1) {
            count++
            index = str.indexOf(str[i], index+1)
            obj[str[i]] = count
        }
    }
    console.log(obj)
}

count_occurrences("my name is vivek");