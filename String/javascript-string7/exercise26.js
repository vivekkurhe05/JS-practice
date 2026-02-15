/**
 * 
 * Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
 * Test Data :
 * console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
 * Output :
 * "The quick brown fox jumps over  lazy dog"
 */

function remove_first_occurrence(input, substr) {
    let index = input.indexOf(substr);
    return input.slice(0, index) + input.slice(index+substr.length +1)
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));