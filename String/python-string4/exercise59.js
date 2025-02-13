/**
 * Write a Python program to find the first maximum number of characters in a given string.
 */

// my sol
function get_max_occuring_char(str) {
    let obj={}
    for(let i=0;i<str.length;i++) {
        let index=str.indexOf(str[i])
        let count=0
        while(index!=-1){
            count++
            index=str.indexOf(str[i],index+1)
            obj[str[i]] = count
        }
    }
    return Object.entries(obj).sort((a,b) => b[1]-a[1])[0][0]
}

console.log(get_max_occuring_char("Python: Get file creation and modification date/times"))
console.log(get_max_occuring_char("abcdefghijkb"))