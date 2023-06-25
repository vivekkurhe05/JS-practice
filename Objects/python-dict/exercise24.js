/**
 * Write a Python program to create a dictionary from a string.
Note: Track the count of the letters from the string.
Sample string : 'w3resource'
Expected output: {'w': 1, '3': 1, 'r': 2, 'e': 2, 's': 1, 'o': 1, 'u': 1, 'c': 1}
 */

// my solution
function countLetters(str) {
    let obj={}
    for(let i=0; i<str.length; i++) {
        let index=str.indexOf(str[i])
        let count=0
        while(index != -1) {
            count++
            index=str.indexOf(str[i],index+1)
            obj[str[i]]=count
        }   
    }
    return obj
}

console.log(countLetters('w3resource'))