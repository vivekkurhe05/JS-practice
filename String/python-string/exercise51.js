/**
 * Write a Python program to find the first non-repeating character in a given string.
 */

// my solution
function first_non_repeating_character(str) {
    let obj = {}
    for(let i=0; i<str.length; i++) {
        let index = str.indexOf(str[i])
        let count = 0
        while(index != -1) {
            count++
            index = str.indexOf(str[i], index+1)
            obj[str[i]] = count
        }
    }
    try{
        return Object.entries(obj).filter(el => el[1] === 1)[0][0]
    }catch(e) {
        return undefined
    }
}

console.log(first_non_repeating_character('abcdef'))
console.log(first_non_repeating_character('abcabcdef'))
console.log(first_non_repeating_character('aabbcc'))