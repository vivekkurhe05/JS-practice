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

function count(input, substr, bool=true) {

    if(bool) {
        input = input.toLowerCase();
    }
    let count = 0;
    let index = input.indexOf(substr,0);

    while(index != -1) {
        count++;
        index = input.indexOf(substr, index+1);
    }

    return count;
}


console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));