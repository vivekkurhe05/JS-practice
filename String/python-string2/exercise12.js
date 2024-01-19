/**
 * Write a Python program to count the occurrences of each word in a given sentence.
Sample String : "the quick brown fox jumps over the lazy dog"
 */

// my solution
function word_count(str) {
    let obj = {}
    let arr = str.trim().split(" ")
    for(let i=0; i<arr.length; i++) {
        let count = 0
        let index = arr.indexOf(arr[i])
        while(index!=-1) {
            count++
            index = arr.indexOf(arr[i], index+1)
            obj[arr[i]] = count
        }
    }
    return obj
}

console.log(word_count("the quick brown fox jumps over the lazy dog"))