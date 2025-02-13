/**
 * Write a Python program to count the occurrences of each word in a given sentence.
Sample String : "the quick brown fox jumps over the lazy dog"
 */

// my sol
function word_count(str) {
    let arr = str.split(" ")
    let obj={}
    for(let i=0;i<arr.length;i++) {
        let index = arr.indexOf(arr[i])
        let count=0
        while(index!=-1) {
            count++
            index=arr.indexOf(arr[i], index+1)
            obj[arr[i]] = count
        }
    }
    return obj
}

console.log(word_count("the quick brown fox jumps over the lazy dog"))