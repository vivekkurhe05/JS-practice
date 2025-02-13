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

function count(str, substr, flag) {
    if(flag===false) str=str.toLowerCase()
    let index=str.indexOf(substr)
    let count=0
    while(index!=-1){
        count++
        index=str.indexOf(substr, index+1)
    }
    return count
}

console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy Fox", 'fox',false));