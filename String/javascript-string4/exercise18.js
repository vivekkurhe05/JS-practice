/**
 * 
 * Write a JavaScript function to count the occurrence of a substring in a string.
 * Test Data :
 * console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
 * Output :
 * 2
 * console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
 * Output :
 * 1
 */

// my sol
function count(str, substr, flag) {
    str = str.toLowerCase()
    let occ=0
    for(let i=0;i<str.length;i++) {
        let index = str.indexOf(substr)
        let count=0
        while(index!=-1) {
            count++
            index = str.indexOf(substr, index+1)
        }
        occ= count
    }
    return occ
}

console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));