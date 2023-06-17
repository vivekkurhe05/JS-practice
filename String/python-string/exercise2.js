/**
 * Write a Python program to count the number of characters (character frequency) in a string.
Sample String : google.com'
Expected Result : {'g': 2, 'o': 3, 'l': 1, 'e': 1, '.': 1, 'c': 1, 'm': 1}
 */

function countCharacters(str) {

    let obj = {}

    for(let i=0; i<str.length; i++) {
        let count=0
        let index = str.indexOf(str[i], 0)
        while(index != -1) {
            count++
            index=str.indexOf(str[i], index+1)
            obj[str[i]]= count
        }
        
    }
    return obj  

}

console.log(countCharacters('google.com'))