/**
 * Write a Python program to count the occurrences of each word in a given sentence.
Sample String : "the quick brown fox jumps over the lazy dog"
 */

// my solution
function word_count(str) {

    let obj = {}
    for(let i=0; i<str.length; i++) {
        let index = str.indexOf(str[i])
        let count = 0
    
        while (index != -1) {
            count++
            index = str.indexOf(str[i], index+1)
            obj[str[i]] = count   
        }
    }

    return obj
}

console.log(word_count("the quick brown fox jumps over the lazy dog"))