/**
 * Write a Python program to count occurrences of a substring in a string.
 */

// my sol
function count_occurrences(substr) {
    let str = "the quick brown fox jumps over the lazy dog"
    for(let i=0;i<str.length;i++) {
        let index=str.indexOf(substr)
        var count=0
        while(index!=-1){
            count++
            index=str.indexOf(substr, index+1)
        }
    }

    return count
}

console.log(count_occurrences("fox"))