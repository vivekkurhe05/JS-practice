/**
 * 
 * Write a JavaScript function to find a word within a string.
 * Test Data :
 * console.log(search_word('The quick brown fox', 'fox'));
 * console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
 * Output :
 * "'fox' was found 1 times."
 * "'aa' was found 2 times."
 */

// my sol
function search_word(str, substr) {

    let count;
    for(let i=0;i<str.length;i++) {
        let index = str.indexOf(substr)
        count=0
        while(index!=-1){
            count++
            index = str.indexOf(substr, index+1)
        }
    }
    return `'${substr}' was found ${count} times.`
}

console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));